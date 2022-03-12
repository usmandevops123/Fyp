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

const Users = () => {
  var amountRef = firebase.database().ref("/users");
  //   const [key, setKey] = useState("");
  const [newlist, setNewlist] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    console.log("check");
    amountRef.once("value", function (snapshot) {
      var List = [];
      console.log("second check");
      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var data = childSnapshot.val();
        console.log(childSnapshot.val());
        List.push({
          domain: data.domain,
          email: data.email,
          name: data.name,
          phone: data.phone,
          role: data.role,
          roll: data.roll,
          uid: data.uid,
        });
      });
      setNewlist(List);
      console.log(List);
    });
  }, []);

  return (
    <div className={classes.mainContainer}>
      <Typography sx={{ marginBottom: 5 }} variant="h4">
        Pupils Details
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Domain</TableCell>
              <TableCell>Email </TableCell>
              <TableCell> Name </TableCell>
              <TableCell> Phone</TableCell>
              <TableCell> Role</TableCell>
              <TableCell> Roll</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newlist.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.domain}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.role}</TableCell>
                  <TableCell>{data.roll}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
