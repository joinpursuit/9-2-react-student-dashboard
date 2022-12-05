import { useState } from "react";
import StudentDetails from "./StudentDetails";

const Student = ({ student, students, resetStudentDetails }) => {
  const [showStudentDetailsBool, setShowStudentDetailsBool] = useState(false);

  //sets the bolean state propped down from app.js to trigger showing student details
  const showStudentDetails = () => {
    setShowStudentDetailsBool(!showStudentDetailsBool);
  };

  //resets the show student details boolean to be the value of the piece of "bridge" boolean state that is fired on click in cohorts to stop showing all student details each time a new cohort is clicked
  const resetStudent = () => {
    setShowStudentDetailsBool(resetStudentDetails);
  };

  return (
    <div className="studentCard" id={student.id} onLoad={resetStudent}>
      <img
        className="profilePhoto"
        src={student.profilePhoto}
        alt={student.profilePhoto}
      ></img>
      <article className="studentInfo">
        <h3>
          {student.names.preferredName} {student.names.middleName}{" "}
          {student.names.surname}
        </h3>
        <p>{student.username}</p>
        <p>Birthday: {student.dob}</p>
        <button onClick={showStudentDetails}>
          {!showStudentDetailsBool ? "Show More..." : "Show Less..."}
        </button>
      </article>
      <StudentDetails
        showStudentDetailsBool={showStudentDetailsBool}
        student={student}
        students={students}
      />
    </div>
  );
};

export default Student;