import React, { useState, useEffect } from "react";
import firebase from "firebase";

const Teacherprofile = () => {
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
          role: "Teacher",
          roll: data.roll,
          uid: data.uid,
        });
      });
      setOurlist(List);
      console.log(List);
    });
  }, []);

  return (
    <div>
      {ourlist.map((data, uid) => {
        if (data.uid === localStorage.getItem("token")) {
          return (
            <div>
              <table>
                <tr>
                  <th> Domain</th>
                  <th>Email </th>
                  <th> Name </th>
                  <th> Phone</th>
                  <th> Role</th>
                  <th> Roll</th>
                </tr>
                <tr>
                  <td>{data.domain}</td>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>{data.role}</td>
                  <td>{data.roll}</td>
                </tr>
              </table>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Teacherprofile;
