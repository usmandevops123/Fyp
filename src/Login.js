import React, { useCallback, useContext, useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import NavbarInstance from "./Components/Navbar.jsx";
import { Card, CardContent, Typography, Button, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import firebase from "firebase";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 50,
    display: "flex",
    alignItems: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    display: "flex",
    alignItems: "center",
  },
});

const Login = ({ history }) => {
  var amountRef = firebase.database().ref("/users");
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  useEffect(() => {
    console.log("check");
    amountRef.once("value", function (snapshot) {
      var tutorials = [];
      console.log("second check");
      snapshot.forEach(function (childSnapshot) {
        //var key = childSnapshot.key;
        var data = childSnapshot.val();
        console.log(childSnapshot.val());
        tutorials.push(data);
      });
      setUserList(tutorials);
      console.log(tutorials);
    });
  }, []);

  const handleLogin = async () => {
    try {
      const uid = await app.auth().signInWithEmailAndPassword(email, password);
      userList.forEach((value) => {
        if (value.uid === uid.user.uid) {
          if (value.role === "Student") {
            localStorage.setItem("token", uid.user.uid);
            console.log("Student");
            history.push("/student");
          } else if (value.role === "Teacher") {
            localStorage.setItem("token", uid.user.uid);
            console.log("Teacher");
            history.push("/teacher");
          } else if (value.role === "Admin") {
            localStorage.setItem("token", uid.user.uid);
            console.log("Admin");
            history.push("/admin");
          }
        }
      });
      //history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  // const { currentUser } = useContext(AuthContext);

  // if (currentUser) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <NavbarInstance />
      <div className={classes.mainContainer}>
        <Card sx={{ minWidth: 200, padding: 5 }}>
          <CardContent>
            <Typography
              variant="h4"
              align="center"
              sx={{ marginTop: 2, marginBottom: 2 }}
            >
              Log in
            </Typography>
            <div>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <div className={classes.buttonContainer}>
                <Button
                  sx={{ marginTop: 5 }}
                  variant="contained"
                  size="small"
                  onClick={handleLogin}
                >
                  Log in
                </Button>
                <Link
                  sx={{ marginTop: 5 }}
                  onClick={() => {
                    history.push("/signup");
                  }}
                >
                  Dont have an account? Signup
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default withRouter(Login);
