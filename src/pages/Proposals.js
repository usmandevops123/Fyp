import React, { useState } from "react";
import firebase from "firebase";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 50,
    display: "flex",
    alignItems: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    display: "flex",
    alignItems: "center",
  },
});

const Proposals = () => {
  const [title, setTitle] = useState("");
  const [studentname, setStudentname] = useState("");
  const [Studentclass, setStudentclass] = useState("");
  const [details, setDetails] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [cosupervisor, setCosupervisor] = useState("");
  const classes = useStyles();

  var ProposalsRef = firebase.database().ref("/Proposals");
  const Push = (object) => {
    ProposalsRef.push(object)
      .then(() => {
        console.log("Data send");
        window.location.reload(false);
      })
      .catch(alert);
  };

  return (
    <div>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 2,
        }}
        variant="h4"
      >
        THESIS SUBMISSION FORM
      </Typography>
      <div className={classes.mainContainer}>
        <Card sx={{ minWidth: 200, padding: 10 }}>
          <CardContent>
            <div className="proposal-frm">
              <div className={classes.input}>
                <label>Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <label>
                Student Name
                <input
                  name="studentname"
                  type="text"
                  placeholder="Student Name"
                  onChange={(e) => setStudentname(e.target.value)}
                />
              </label>
              <label>
                Student class
                <input
                  name="student class"
                  type="text"
                  placeholder="Student class"
                  onChange={(e) => setStudentclass(e.target.value)}
                />
              </label>

              <label>
                Details
                <input
                  name="details"
                  type="text"
                  placeholder="Details"
                  onChange={(e) => setDetails(e.target.value)}
                />
              </label>
              <label>
                Supervisor
                <input
                  name="supervisor"
                  type="text"
                  placeholder="SuperVisor name"
                  onChange={(e) => setSupervisor(e.target.value)}
                />
              </label>
              <label>
                Co-Supervisor
                <input
                  name="name"
                  type="text"
                  placeholder="Co-Supervisor name"
                  onChange={(e) => setCosupervisor(e.target.value)}
                />
              </label>
              <div className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  sx={{ marginTop: 5 }}
                  onClick={() => {
                    Push({
                      title: title,
                      studentname: studentname,
                      Studentclass: Studentclass,
                      details: details,
                      supervisor: supervisor,
                      cosupervisor: cosupervisor,
                      status: "Pending",
                      progress: "Pending",
                      date: Date.now(),
                      uid: localStorage.getItem("token"),
                    });
                  }}
                >
                  Submit Proposal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Proposals;
