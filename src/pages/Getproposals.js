import React, { useEffect, useState } from "react";
import firebase from "firebase";
import {
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Proposals from "./Proposals";

const useStyles = makeStyles({
  tableContainer: {
    // width: 500,
  },
});

const Getproposals = () => {
  const [key, setKey] = useState("");
  const [mylist, setMylist] = useState([]);
  const classes = useStyles();

  var ProposalsRef = firebase.database().ref("/Proposals");
  useEffect(() => {
    console.log("check");
    ProposalsRef.once("value", function (snapshot) {
      var List = [];
      console.log("second check");
      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var data = childSnapshot.val();
        console.log(childSnapshot.val());
        List.push({
          key: key,
          title: data.title,
          studentname: data.studentname,
          Studentclass: data.Studentclass,
          details: data.details,
          supervisor: data.supervisor,
          cosupervisor: data.cosupervisor,
          status: data.status,
          progress: data.progress,
        });
      });
      setMylist(List);
      console.log(List);
    });
  }, []);

  const updateStatus = (status, key) => {
    ProposalsRef.child(key)
      .update({
        status: status,
      })
      .then(() => {
        window.location.reload(false);
      });
  };

  const updateProgress = (progress, key) => {
    ProposalsRef.child(key)
      .update({
        progress: progress,
      })
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography align="center" variant="h4" sx={{ marginBottom: 5 }}>
            Proposals List
          </Typography>
          <div className={classes.tableContainer}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>StudentName</TableCell>
                    <TableCell align="right">Studentclass</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Details </TableCell>
                    <TableCell align="right">Supervisor</TableCell>
                    <TableCell align="right">Co-supervisor </TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Progress</TableCell>
                    <TableCell align="right">Update Progress</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mylist.map((data) => {
                    return (
                      <>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            {data.studentname}
                          </TableCell>
                          <TableCell align="left">
                            {data.Studentclass}
                          </TableCell>
                          <TableCell align="left">{data.title}</TableCell>
                          <TableCell align="left">{data.details}</TableCell>
                          <TableCell align="left">{data.supervisor}</TableCell>
                          <TableCell align="left">
                            {data.cosupervisor}
                          </TableCell>
                          <TableCell align="left">{data.status}</TableCell>
                          <TableCell align="left">{data.progress}</TableCell>
                          <TableCell align="center">
                            <ButtonGroup
                              variant="contained"
                              aria-label="outlined primary button group"
                            >
                              <Button
                                color="secondary"
                                onClick={() => {
                                  updateProgress("Good", data.key);
                                }}
                              >
                                Good
                              </Button>
                              <Button
                                onClick={() => {
                                  updateProgress("Average", data.key);
                                }}
                              >
                                Average
                              </Button>
                              <Button
                                color="error"
                                onClick={() => {
                                  updateProgress("Bad", data.key);
                                }}
                              >
                                Bad
                              </Button>
                            </ButtonGroup>
                          </TableCell>
                          <TableCell align="center">
                            <ButtonGroup>
                              <Button
                                variant="outlined"
                                onClick={() => {
                                  updateStatus("Accept", data.key);
                                }}
                              >
                                Accept
                              </Button>
                              <Button
                                variant="outlined"
                                color="error"
                                onClick={() => {
                                  updateStatus("Reject", data.key);
                                }}
                              >
                                Reject
                              </Button>
                            </ButtonGroup>
                          </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Getproposals;
