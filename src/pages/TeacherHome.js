import React from "react";
import app from "../base";

export const TeacherHome = ({ history }) => {
  return (
    <div>
      <h1>Teacher Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>

      <button
        onClick={() => {
          history.push("/getproposals");
        }}
      >
        {" "}
        Get Proposals{" "}
      </button>
      <button
        onClick={() => {
          history.push("/teacherprofile");
        }}
      >
        {" "}
        View Profile{" "}
      </button>

      <button
        onClick={() => {
          history.push("/enrollstudent");
        }}
      >
        {" "}
        View Enrolled Students{" "}
      </button>
    </div>
  );
};
