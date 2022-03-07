import React, { useState } from "react";
import firebase from "firebase";
import { withRouter } from "react-router";
import app from "../base";

const Newadmin = () => {
  var amountRef = firebase.database().ref("/users");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

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
      <div className="Enroll-frm">
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
          Email
          <input
            name="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          password
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button onClick={handleSignUp}> Enter New Admin</button>
      </div>
    </div>
  );
};

export default Newadmin;
