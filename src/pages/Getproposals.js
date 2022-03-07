import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Proposals from "./Proposals";

const Getproposals = () => {
  const [key, setKey] = useState("");
  const [mylist, setMylist] = useState([]);

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
          studentname: data.studentname,
          Studentclass: data.Studentclass,
          details: data.details,
          supervisor: data.supervisor,
          cosupervisor: data.cosupervisor,
          status: data.status,
          progress: data.progress,
        });
      });
      setMylist(List);
      console.log(List);
    });
  }, []);

  const updateStatus = (status, key) => {
    ProposalsRef.child(key)
      .update({
        status: status,
      })
      .then(() => {
        window.location.reload(false);
      });
  };

  const updateProgress = (progress, key) => {
    ProposalsRef.child(key)
      .update({
        progress: progress,
      })
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <div>
      <div className="Card">
        <table>
          <tr>
            <th>StudentName</th>
            <th>Studentclass</th>
            <th>Title</th>
            <th>Details </th>
            <th>Supervisor</th>
            <th>Co-supervisor </th>
            <th>Status</th>
            <th>Progress</th>
            <th>Update Progress</th>
            <th>Actions</th>
          </tr>
          {mylist.map((data) => {
            return (
              <tr>
                <td>{data.studentname}</td>
                <td>{data.Studentclass}</td>
                <td>{data.title}</td>
                <td>{data.details}</td>
                <td>{data.supervisor}</td>
                <td>{data.cosupervisor}</td>
                <td>{data.status}</td>
                <td>{data.progress}</td>
                <td>
                  <button
                    onClick={() => {
                      updateProgress("Good", data.key);
                    }}
                  >
                    Good
                  </button>
                  <button
                    onClick={() => {
                      updateProgress("Average", data.key);
                    }}
                  >
                    Average
                  </button>
                  <button
                    onClick={() => {
                      updateProgress("Bad", data.key);
                    }}
                  >
                    Bad
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      updateStatus("Accept", data.key);
                    }}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => {
                      updateStatus("Reject", data.key);
                    }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Getproposals;
