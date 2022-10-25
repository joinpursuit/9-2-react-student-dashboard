import { useState } from "react";
import StudentDetails from "../studentDetails/StudentDetails";
import "./Student.css";

export default function Student({ student, addNoteToStudent }) {
  const [showDetails, setShowDetails] = useState(false);
  const isOnTrack =
    Object.values(student.certifications).every((v) => v) &&
    student.codewars.current.total > 600;

  function formatDob(dob) {
    const date = new Date(dob).toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  }
  return (
    <li className="student">
      <div className="card">
        <div className="profile-pic">
          <img src={student.profilePhoto}></img>
        </div>
        <div className="info">
          <div className="divider">
            <div className="personal-info">
              <p>
                <strong>
                  {student.names.preferredName + " "}
                  {student.names.middleName + " "}
                  {student.names.surname}
                </strong>
              </p>
              <p>{student.username}</p>
              <p>
                <span id="bd">Birthday: </span> {formatDob(student.dob)}
              </p>
              <br />
            </div>
            <div>
              <p className="green">
                {isOnTrack ? "On track to graduation" : ""}
              </p>
            </div>
          </div>

          <div className="details">
            <p>
              <a onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Show Less" : "Show More..."}
              </a>
            </p>

            {showDetails && (
              <StudentDetails
                student={student}
                addNoteToStudent={addNoteToStudent}
              />
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
