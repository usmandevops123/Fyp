import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import { AdminHome } from "./pages/AdminHome";
import { StudentHome } from "./pages/StudentHome";
import { TeacherHome } from "./pages/TeacherHome";
import Proposals from "./pages/Proposals";
import Getproposals from "./pages/Getproposals";
import Statusproposal from "./pages/Statusproposal";
import Teacherprofile from "./pages/Teacherprofile";
import Newadmin from "./pages/Newadmin";
import EnrolledStudent from "./pages/EnrolledStudent";
import Users from "./pages/Users";
import AdminGetproposals from "./pages/AdminGetproposals";
import AdminOwnprofile from "./pages/AdminOwnprofile";
import StudentOwnprofile from "./pages/StudentOwnprofile";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/admin" component={AdminHome} />
          <PrivateRoute exact path="/student" component={StudentHome} />
          <PrivateRoute exact path="/teacher" component={TeacherHome} />
          <PrivateRoute exact path="/proposals" component={Proposals} />
          <PrivateRoute exact path="/getproposals" component={Getproposals} />
          <PrivateRoute
            exact
            path="/enrollstudent"
            component={EnrolledStudent}
          />
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute
            exact
            path="/admingetproposals"
            component={AdminGetproposals}
          />
          <PrivateRoute
            exact
            path="/adminprofile"
            component={AdminOwnprofile}
          />
          <PrivateRoute
            exact
            path="/studentownprofile"
            component={StudentOwnprofile}
          />

          <PrivateRoute
            exact
            path="/proposalstatus"
            component={Statusproposal}
          />
          <PrivateRoute
            exact
            path="/teacherprofile"
            component={Teacherprofile}
          />
          <PrivateRoute exact path="/newadmin" component={Newadmin} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
