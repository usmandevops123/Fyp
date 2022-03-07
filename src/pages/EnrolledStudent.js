import React, { useState, useEffect } from "react";
import firebase from "firebase";

const EnrolledStudent = () => {
  var amountRef = firebase.database().ref("/users");
  const [key, setKey] = useState("");
  const [enrolllist, setEnrolllist] = useState([]);
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
          //   uid: data.uid,
        });
      });
      setEnrolllist(List);
      console.log(List);
    });
  }, []);

  return (
    <div>
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

          {enrolllist.map((data, role) => {
            if (data.role === "Student") {
              return (
                <tr>
                  <td>{data.domain}</td>
                  <td>{data.email}</td>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>{data.role}</td>
                  <td>{data.roll}</td>
                </tr>
              );
            }
          })}
        </table>
      </div>
    </div>
  );
};

export default EnrolledStudent;
