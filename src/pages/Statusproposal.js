import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Proposals from "./Proposals";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 50,
    display: "flex",
    alignItems: "flex",
    justifyContent: "center",
    paddingRight: 100,
    paddingLeft: 100,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex",
    justifyContent: "center",
  },
});

const Statusproposal = () => {
  const [key, setKey] = useState("");
  const [yourlist, setYourlist] = useState([]);
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
          status: data.status,
          progress: data.progress,
          uid: data.uid,
        });
      });
      setYourlist(List);
      console.log(List);
    });
  }, []);

  return (
    <div className={classes.container}>
      <Typography variant={"h4"} sx={{ padding: 5 }} align="center">
        Proposal Status
      </Typography>
      <div className={classes.mainContainer}>
        {yourlist.map((data, uid) => {
          if (data.uid === localStorage.getItem("token")) {
            return (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell align="right">Status</TableCell>
                      <TableCell align="right">Progress</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {data.title}
                      </TableCell>
                      <TableCell align="right">{data.status}</TableCell>
                      <TableCell align="right">{data.progress}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Statusproposal;
