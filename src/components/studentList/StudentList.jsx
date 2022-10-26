import { useState } from "react";
import Student from "../student/Student";
import "./StudentList.css";
import Pagination from "../pagination/Pagination";
export default function StudentList({
  filteredStudents,
  selectedCohort,
  addNoteToStudent,
}) {
  const [studentsTodisplay, setStudentsToDisplay] = useState([]);

  return (
    <div className="student-list-container">
      <div className="grid">
        <h3>
          {selectedCohort === "All Students"
            ? "All Students"
            : selectedCohort.slice(0, -4) + " " + selectedCohort.slice(-4)}
        </h3>
        <Pagination
          filteredStudents={filteredStudents}
          setStudentsToDisplay={setStudentsToDisplay}
          selectedCohort={selectedCohort}
        />
      </div>

      <p>
        Total Students:
        <span className="total-students"> {filteredStudents.length}</span>
      </p>
      <ul className="student-list">
        {studentsTodisplay &&
          studentsTodisplay.map((student) => (
            <Student
              student={student}
              key={student.id}
              addNoteToStudent={addNoteToStudent}
            />
          ))}
      </ul>
    </div>
  );
}
