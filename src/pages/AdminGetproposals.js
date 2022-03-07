import React, { useState, useEffect } from "react";
import firebase from "firebase";

const AdminGetproposals = () => {
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
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default AdminGetproposals;
