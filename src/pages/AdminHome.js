import React from "react";

import app from "../base";
export const AdminHome = ({ history }) => {
  return (
    <div>
      <h1>Admin Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <button
        onClick={() => {
          history.push("/newadmin");
        }}
      >
        {" "}
        Add New Admin{" "}
      </button>

      <button
        onClick={() => {
          history.push("/users");
        }}
      >
        {" "}
        View Users{" "}
      </button>

      <button
        onClick={() => {
          history.push("/admingetproposals");
        }}
      >
        {" "}
        View Proposals{" "}
      </button>

      <button
        onClick={() => {
          history.push("/adminprofile");
        }}
      >
        {" "}
        My Profile{" "}
      </button>
    </div>
  );
};
