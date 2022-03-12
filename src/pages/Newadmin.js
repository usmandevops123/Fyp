import React, { useState } from "react";
import firebase from "firebase";
import { withRouter } from "react-router";
import app from "../base";
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

const Newadmin = () => {
  var amountRef = firebase.database().ref("/users");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const classes = useStyles();

  const handleSignUp = async () => {
    try {
      const uid = await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(uid.user.uid);
      console.log("okayreport");
      Push({
        email: email,
        name: name,
        roll: "",
        domain: "",
        phone: phone,
        role: "Admin",
        uid: uid.user.uid,
      });
      //history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const Push = (object) => {
    amountRef
      .push(object)
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
        NEW ADMIN FORM
      </Typography>
      <div className={classes.mainContainer}>
        <Card sx={{ minWidth: 200, padding: 10 }}>
          <CardContent>
            <div className="proposal-frm">
              <div className={classes.input}>
                <label>Title</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <label>
                Student Name
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Student class
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <label>
                Details
                <input
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <div className={classes.buttonContainer}>
                <Button
                  sx={{ marginTop: 5 }}
                  variant="contained"
                  onClick={handleSignUp}
                >
                  {" "}
                  Enter New Admin
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Newadmin;
