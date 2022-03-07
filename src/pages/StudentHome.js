import React from "react";

import app from "../base";

export const StudentHome = ({ history }) => {
  return (
    <div>
      <h1>Student Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <button
        onClick={() => {
          history.push("/proposals");
        }}
      >
        {" "}
        Upload Proposals{" "}
      </button>
      <button
        onClick={() => {
          history.push("/proposalstatus");
        }}
      >
        {" "}
        View Status{" "}
      </button>

      <button
        onClick={() => {
          history.push("/studentownprofile");
        }}
      >
        {" "}
        My Profile{" "}
      </button>
    </div>
  );
};
