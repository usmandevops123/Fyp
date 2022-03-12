/* eslint-disable no-use-before-define */
/* eslint-disable no-array-constructor */
import { Card, CardContent, Link, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import React from "react";
import app from "../base";

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
function createData(sno, name, email, specialization) {
  return { sno, name, email, specialization };
}
const rows = [
  createData(
    1,
    "Prof. Dr. Najmi Ghani Haider",
    "najmi@cloud.neduet.edu.pk",
    "Image Processing, Databases and Software Engineering"
  ),
  createData(
    2,
    "Prof. Dr. Najmi Ghani Haider",
    "najmi@cloud.neduet.edu.pk",
    "Image Processing, Databases and Software Engineering"
  ),
  createData(
    3,
    "Prof. Dr. Najmi Ghani Haider",
    "najmi@cloud.neduet.edu.pk",
    "Image Processing, Databases and Software Engineering"
  ),
  createData(
    4,
    "Prof. Dr. Najmi Ghani Haider",
    "najmi@cloud.neduet.edu.pk",
    "Image Processing, Databases and Software Engineering"
  ),
  createData(
    5,
    "Prof. Dr. Najmi Ghani Haider",
    "najmi@cloud.neduet.edu.pk",
    "Image Processing, Databases and Software Engineering"
  ),
];

export const TeacherHome = ({ history }) => {
  const classes = useStyles();
  var objToday = new Date(),
    weekday = new Array(
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ),
    dayOfWeek = weekday[objToday.getDay()],
    domEnder = (function () {
      var a = objToday;
      if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
      a = parseInt((a + "").charAt(1));
      return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th";
    })(),
    dayOfMonth =
      today + (objToday.getDate() < 10)
        ? "0" + objToday.getDate() + domEnder
        : objToday.getDate() + domEnder,
    months = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ),
    curMonth = months[objToday.getMonth()],
    curYear = objToday.getFullYear();

  var today = dayOfWeek + " " + dayOfMonth + " " + curMonth + ", " + curYear;

  return (
    <div>
      <div className={classes.buttonContainer}>
        <h1>Teacher Home</h1>
        <Button
          variant="outlined"
          onClick={() => {
            history.push("/teacherprofile");
          }}
        >
          {" "}
          View Profile{" "}
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            history.push("/getproposals");
          }}
        >
          {" "}
          Get Proposals{" "}
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            history.push("/enrollstudent");
          }}
        >
          {" "}
          View Enrolled Students{" "}
        </Button>
        <Button variant="outlined" onClick={() => app.auth().signOut()}>
          Sign out
        </Button>
      </div>
      <div>
        <Card>
          <CardContent>
            <h1>Important Announcements for MS Thesis</h1>
            <p>Dated: {today}</p>
            <div>
              <h3>Exam for MS Thesis (CT-5002) Spring 2021</h3>
              <p>
                All those students who are currently enrolled in MS Thesis and
                are expected to complete at least two semesters by the end of
                Spring 2021 with their necessary thesis work are required to
                submit the application on prescribed proforma ( downloadable
                from{" "}
                <Link
                  href="https://cct.neduet.edu.pk/downloads"
                  target="_blank"
                >
                  https://cct.neduet.edu.pk/downloads
                </Link>{" "}
                ) to the Chairman through their respective supervisors. Deadline
                is 7th October 2021.
                <br />
                All those students who are expected to complete their MS thesis
                exam are required to download MS thesis template for final
                submission from the link
                <Link
                  href="https://cct.neduet.edu.pk/downloads"
                  target="_blank"
                  underline="always"
                >
                  https://cct.neduet.edu.pk/downloads
                </Link>
                <br />
                The students also have to submit the turnitin report along with
                the thesis.
              </p>
            </div>
            <div>
              <h3>
                First Semester Evaluation of Currently Enrolled MS Thesis
                Students
              </h3>
              <p>
                All those students who are expected to complete first semester
                of MS Thesis by the end of this semester are required to submit
                Semester Evaluation Report of MS Thesis to their respective
                supervisors for which the prescribed proforma is available at{" "}
                <Link
                  href="https://cct.neduet.edu.pk/downloads"
                  target="_blank"
                >
                  https://cct.neduet.edu.pk/downloads
                </Link>
                Deadline is 25th October 2021.{" "}
              </p>
            </div>
            <div>
              <h3>New MS Thesis (CT-5002) Proposals for the next semester</h3>
              <p>
                Proposal submission deadline: Monday 22nd November 2021. All
                those students who are willing to register in CT-5002 Thesis are
                advised to discuss their thesis proposal with any faculty member
                of the department.
                <ul>
                  <li>
                    Thesis shall be allowed only to those students having
                    completed twelve credit hours with a minimum 2.75 CGPA.
                    (those who are expecting to complete this requirement in
                    current semester examination result should also apply)
                  </li>
                  <li>
                    Students are advised to carefully read the rules and
                    regulations of the MS Thesis in prospectus (Section 6.4),
                    available online at
                    <Link
                      href="https://www.neduet.edu.pk/postgraduate_admissions"
                      target="_blank"
                    >
                      https://www.neduet.edu.pk/postgraduate_admissions
                    </Link>{" "}
                  </li>
                  <li>
                    If you find yourself eligible for the Thesis then you should
                    immediately contact one of the faculty members of the
                    department and discuss your research project idea to
                    supervise.
                  </li>
                  <li>
                    Proposal must be according to the template that is available
                    at
                    <Link
                      href="https://cct.neduet.edu.pk/downloads"
                      target="_blank"
                    >
                      https://cct.neduet.edu.pk/downloads
                    </Link>
                  </li>
                </ul>
                <h4>Proposal Submission:</h4>
                <p>
                  Proposals should be submitted to the respective supervisors
                  who will forward it with their <b>comments</b> to the Chairman
                  CSIT for final approval.
                </p>
                <h4>Thesis Supervisors</h4>
                <div>
                  <TableContainer>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Serial No</TableCell>
                          <TableCell align="right">Name</TableCell>
                          <TableCell align="right">Email</TableCell>
                          <TableCell align="right">Specialization</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.sno}>
                            <TableCell component="th" scope="row">
                              {row.sno}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">
                              {row.specialization}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </p>
            </div>
            <div>
              <h3>Final Thesis Submission</h3>
              <p>
                Final Thesis (hardcopy) along with plagiarism report must be
                submitted to <b>Dr. Umer Farooque</b> (Assistant Professor, CSIT
                NEDUET) The recommended template of MS Thesis (in Latex format)
                is available online at:{" "}
                <Link
                  href="https://www.overleaf.com/read/thskqhskddpy"
                  target="_blank"
                >
                  https://www.overleaf.com/read/thskqhskddpy
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
