import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginTop: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  data: {
    display: "flex",
    alignItems: "center",
  },
});

const StudentOwnprofile = () => {
  var amountRef = firebase.database().ref("/users");
  const [key, setKey] = useState("");
  const [ourlist, setOurlist] = useState([]);
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
          role: "Student",
          roll: data.roll,
          uid: data.uid,
        });
      });
      setOurlist(List);
      console.log(List);
    });
  }, []);

  const classes = useStyles();
  return (
    <>
      <Typography align="center" variant="h4">
        Student Profile
      </Typography>
      <div className={classes.container}>
        <Card
          sx={{
            minWidth: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardContent>
            {ourlist.map((data, uid) => {
              if (data.uid === localStorage.getItem("token")) {
                return (
                  <div>
                    <div className={classes.data}>
                      <Typography sx={{ marginRight: 5 }}>Domain:</Typography>
                      <Typography> {data.domain}</Typography>
                    </div>
                    <div className={classes.data}>
                      <Typography sx={{ marginRight: 5 }}>Name:</Typography>
                      <Typography> {data.name}</Typography>
                    </div>
                    <div className={classes.data}>
                      <Typography sx={{ marginRight: 5 }}>Email:</Typography>
                      <Typography> {data.email}</Typography>
                    </div>
                    <div className={classes.data}>
                      <Typography sx={{ marginRight: 5 }}>Phone:</Typography>
                      <Typography> {data.phone}</Typography>
                    </div>
                    <div className={classes.data}>
                      <Typography sx={{ marginRight: 5 }}>Role:</Typography>
                      <Typography> {data.role}</Typography>
                    </div>
                    <div className={classes.data}>
                      <Typography sx={{ marginRight: 5 }}>Roll #:</Typography>
                      <Typography> {data.roll}</Typography>
                    </div>
                  </div>
                );
              }
            })}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default StudentOwnprofile;
