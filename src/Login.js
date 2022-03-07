import React, { useCallback, useContext, useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

import firebase from "firebase";

const Login = ({ history }) => {
  var amountRef = firebase.database().ref("/users");
  const [userList, setUserList] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <h1>Log in</h1>
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
        <button onClick={handleLogin}>Log in</button>
        <div
          onClick={() => {
            history.push("/signup");
          }}
        >
          Dont have an account? Signup
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
