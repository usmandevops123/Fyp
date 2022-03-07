import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Proposals from "./Proposals";

const Statusproposal = () => {
  const [key, setKey] = useState("");
  const [yourlist, setYourlist] = useState([]);
  var ProposalsRef = firebase.database().ref("/Proposals");
  useEffect(() => {
    console.log("check");
    ProposalsRef.once("value", function (snapshot) {
      var List = [];
      console.log("second check");
      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var data = childSnapshot.val();
        console.log(childSnapshot.val());
        List.push({
          key: key,
          title: data.title,
          status: data.status,
          progress: data.progress,
          uid: data.uid,
        });
      });
      setYourlist(List);
      console.log(List);
    });
  }, []);

  return (
    <div>
      {yourlist.map((data, uid) => {
        if (data.uid === localStorage.getItem("token")) {
          return (
            <div>
              <table>
                <tr>
                  <th> Title</th>
                  <th>Status </th>
                  <th> Progress</th>
                </tr>
                <tr>
                  <td>{data.title}</td>
                  <td>{data.status}</td>
                  <td>{data.progress}</td>
                </tr>
              </table>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Statusproposal;
