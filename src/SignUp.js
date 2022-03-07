import React, { useState } from "react";
import { withRouter } from "react-router";
import app from "./base";

import firebase from "firebase";

const SignUp = ({ history }) => {
  var amountRef = firebase.database().ref("/users");
  const [state, setState] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const [domain, setDomain] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = async () => {
    try {
      const uid = await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(uid.user.uid);
      console.log(state);
      Push({
        email: email,
        name: name,
        roll: roll,
        domain: domain,
        phone: phone,
        role: "Student",
        uid: uid.user.uid,
      });
      //history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const handleSignUp2 = async () => {
    try {
      const uid = await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(uid.user.uid);
      console.log(state);
      Push({
        email: email,
        name: name,
        roll: roll,
        domain: domain,
        phone: phone,
        role: "Teacher",
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
        history.push("/login");
      })
      .catch(alert);
  };

  return (
    <div>
      <h1>Sign up</h1>
      <div>
        <input
          type="radio"
          name="Student"
          value={state}
          checked={state === true ? true : false}
          onChange={() => {
            setState(true);
          }}
        />
        <span>Student</span>
        <input
          type="radio"
          name="Teacher"
          value={state}
          checked={state === false ? true : false}
          onChange={() => {
            setState(false);
          }}
        />
        <span>Teacher</span>
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          {state === false ? "Teacher no" : "Roll no"}
          <input
            name="roll"
            type="text"
            placeholder={state === false ? "Teacher no" : "Roll no"}
            onChange={(e) => setRoll(e.target.value)}
          />
        </label>
        <label>
          Domain
          <input
            name="domain"
            type="text"
            placeholder="Domain"
            onChange={(e) => setDomain(e.target.value)}
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
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
        <button onClick={state === true ? handleSignUp : handleSignUp2}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
