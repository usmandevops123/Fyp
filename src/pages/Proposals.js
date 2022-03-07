import React, { useState } from "react";
import firebase from "firebase";
const Proposals = () => {
  const [title, setTitle] = useState("");
  const [studentname, setStudentname] = useState("");
  const [Studentclass, setStudentclass] = useState("");
  const [details, setDetails] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [cosupervisor, setCosupervisor] = useState("");

  var ProposalsRef = firebase.database().ref("/Proposals");
  const Push = (object) => {
    ProposalsRef.push(object)
      .then(() => {
        console.log("Data send");
        window.location.reload(false);
      })
      .catch(alert);
  };

  return (
    <div>
      <div className="proposal-frm">
        <label>
          Title
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Student Name
          <input
            name="studentname"
            type="text"
            placeholder="Student Name"
            onChange={(e) => setStudentname(e.target.value)}
          />
        </label>
        <label>
          Student class
          <input
            name="student class"
            type="text"
            placeholder="Student class"
            onChange={(e) => setStudentclass(e.target.value)}
          />
        </label>

        <label>
          Details
          <input
            name="details"
            type="text"
            placeholder="Details"
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <label>
          Supervisor
          <input
            name="supervisor"
            type="text"
            placeholder="SuperVisor name"
            onChange={(e) => setSupervisor(e.target.value)}
          />
        </label>
        <label>
          Co-Supervisor
          <input
            name="name"
            type="text"
            placeholder="Co-Supervisor name"
            onChange={(e) => setCosupervisor(e.target.value)}
          />
        </label>
        <button
          onClick={() => {
            Push({
              title: title,
              studentname: studentname,
              Studentclass: Studentclass,
              details: details,
              supervisor: supervisor,
              cosupervisor: cosupervisor,
              status: "Pending",
              progress: "Pending",
              date: Date.now(),
              uid: localStorage.getItem("token"),
            });
          }}
        >
          Submit Proposal
        </button>
      </div>
    </div>
  );
};

export default Proposals;
