import { useState } from "react";
import StudentDetails from "../studentDetails/StudentDetails";
import "./Student.css";
export default function Student({ student }) {
  const [showDetails, setShowDetails] = useState(false);

  function formatDob(dob) {
    const date = new Date(dob).toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  }
  return (
    <li>
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
              <a href="">On track to graduation</a>
            </div>
          </div>

          <div className="details">
            <p>
              <a onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Show Less" : "Show More..."}
              </a>
            </p>

            {showDetails && <StudentDetails student={student} />}
          </div>
        </div>
      </div>
    </li>
  );
}
