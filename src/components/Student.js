import React, { useState } from "react";
import AddedInfo from "./AddedInfo";

export default function Student({ student, studentNotes, updatedNotesForStudent }) {
  const [displayInfo, toggleDisplayInfo] = useState(false);

  function formattedDate(date) {
    const dob = new Date(date);
    const month = dob.toLocaleString("default", { month: "long" });
    const day = dob.getDate();
    const year = dob.getFullYear();

    return month + " " + day + ", " + year;
  }

  function onTrack(student) {
    if (
      Object.values(student.certifications).every((value) => value === true) &&
      student.codewars.current.total > 600
    ) {
      return <div> On Track to Graduate </div>;
    }
  }

  function colorPercentages(student) {
    let percent =
      (student.codewars.current.total / student.codewars.goal.total) * 100;

    if (percent > 100) {
      return <span style={{ color: "green" }}>{percent.toFixed(0)}%</span>;
    }
    if (percent < 100 && percent > 50) {
      return <span style={{ color: "yellow" }}>{percent.toFixed(0)}%</span>;
    } else if (percent < 50) {
      return <span style={{ color: "red" }}>{percent.toFixed(0)}%</span>;
    }
  }

  function showMore(e) {
    e.preventDefault();
    toggleDisplayInfo(!displayInfo);
  }

  function studentCard(student) {
    return (
      <div className="studentInfo">
        <strong>Codewars</strong>
        <br />
        Current Total: {student.codewars.current.total}
        <br />
        Last Week: {student.codewars.current.lastWeek}
        <br />
        Goal: {student.codewars.goal.total}
        <br />
        Percent of Goal Achieved: {colorPercentages(student)}
        <br />
        <br />
        <br />
        <strong>Scores</strong>
        <br />
        Assignments: {student.cohort.scores.assignments * 100}%
        <br />
        Projects: {student.cohort.scores.projects * 100}%
        <br />
        Assessments: {student.cohort.scores.assessments * 100}%
        <br />
        <br />
        <br />
        <strong>Certifications</strong>
        <br />
        Resume: {student.certifications.resume ? "✅ " : "❌"}
        <br />
        LinkedIn: {student.certifications.linkedin ? "✅ " : "❌"}
        <br />
        Mock Interview: {student.certifications.mockInterview ? "✅ " : "❌"}
        <br />
        Github: {student.certifications.linkedin ? "✅ " : "❌"}
        <br />
        <br/>
      </div>
    );
  }

  return (
    <div key={student.id} className="studentCard">
      <span className="studentProfile">
        <img
          alt={student.id}
          src={student.profilePhoto}
          style={{ width: "100px" }}
        />
      </span>
      <h3 className="studentName">
        {student.names.preferredName} {student.names.middleName}{" "}
        {student.names.surname}
      </h3>
      <h5 className="studentUser">{student.username}</h5>
      <h5 className="studentDOB">Birthday: {formattedDate(student.dob)}</h5>
      <h6>{onTrack(student)}</h6>
      <span>
        <a href="null" onClick={(e) => showMore(e)}>
          {displayInfo ? "Show Less..." : "Show More..."}
        </a>
        <span>{displayInfo ? <span>{studentCard(student)}</span> : null}</span>

        {displayInfo ? <AddedInfo studentID={student.id} studentNotes={studentNotes} updatedNotesForStudent={updatedNotesForStudent} /> : null}
      </span>
    </div>
  );
}
