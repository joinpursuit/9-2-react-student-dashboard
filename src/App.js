import React from "react";
import { useState } from "react";
import data from "./data/data";
import ProfileList from "./components/ProfileList";
import "./App.css";
import Cohort from "./components/Cohort";

function App() {
  const [cohort, setCohort] = useState("All Students");

  const [students, setStudents] = useState(data);

  function addNewNote(studentId, comment, commentator) {
    let filteredStudent = students.find((student) => {
      return studentId === student.id;
    });
    filteredStudent.notes.push({ commenter: commentator, comment });
    setStudents([
      filteredStudent,
      ...students.filter((student) => student.id !== studentId),
    ]);
  }

  function filterProfileList(strCohort) {
    if (strCohort === "All Students") {
      return students;
    }
    return students.filter((e) => {
      return e.cohort.cohortCode === strCohort;
    });
  }

  return (
    <div className="App">
      <div className="header">
        <header>
          {" "}
          <h1>Student Dashboard</h1>
        </header>
      </div>

      <main>
        <div className="main-container">
          <div className="cohort">
            <Cohort setCohort={setCohort} />
          </div>

          <div className="profileList">
            {/* {cohort === "All Students" ? (
              <ProfileList data={students} addNewNote={addNewNote} />
            ) : ( */}
            <ProfileList
              data={filterProfileList(cohort)}
              addNewNote={addNewNote}
            />
            {/* )} */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
