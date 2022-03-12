import React, { useState, useEffect } from "react";
import firebase from "firebase";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    padding: 10,
  },
});

const AdminGetproposals = () => {
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

  return (
    <div className={classes.mainContainer}>
      <Typography sx={{ marginBottom: 5 }} variant="h4">
        Proposal Details
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Student Class</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Details </TableCell>
              <TableCell>Supervisor </TableCell>
              <TableCell>Co-supervisor</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Progress</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mylist.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.studentname}</TableCell>
                  <TableCell>{data.Studentclass}</TableCell>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.details}</TableCell>
                  <TableCell>{data.supervisor}</TableCell>
                  <TableCell>{data.cosupervisor}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell>{data.progress}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminGetproposals;
