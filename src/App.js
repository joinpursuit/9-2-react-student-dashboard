import StudentCards from "./components/StudentCards.jsx";
import Selector from "./components/Selector.jsx";

import Students from "./data/data.json";

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";

function App() {
  const [currSemester, setSemester] = useState({
    year: "All Students",
    total: "250",
  });

  const currStudentlist = Students.filter((student) =>
    currSemester === "All Students"
      ? student
      : student.cohort.cohortCode === currSemester
  );
  return (
    <div className="main">
      <div className="heading">
        <div>
          <h1>Student Dashboard</h1>{" "}
          <img
            className="logo"
            src="https://images.squarespace-cdn.com/content/v1/5ea906bfb2891a7f00d30604/1591593368495-WTN6Z0NU1GKJ9N2PO90B/Pursuit%2BLogo%2BBlack.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="heading">
        <div></div>
      </div>
      <div className="spacer">
        <div className="dark">
          <Router>
            <Selector
              Students={Students}
              currSemester={currSemester}
              currStudentlist={currStudentlist}
            />
            <Routes>
              <>
                <Route
                  path="/:year"
                  element={
                    <StudentCards
                      setSemester={setSemester}
                      currSemester={currSemester}
                      Students={Students}
                      currStudentlist={currStudentlist}
                    />
                  }
                />
                <Route
                  path="/"
                  element={
                    <StudentCards
                      setSemester={setSemester}
                      currSemester={currSemester}
                      Students={Students}
                      currStudentlist={currStudentlist}
                    />
                  }
                />
              </>
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
