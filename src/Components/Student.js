import { useState } from "react";
import StudentDetails from "./Details";

function StudentCard({
  names,
  username,
  profilePhoto,
  dob,
  certifications,
  codewars,
  cohort,
  notes,
}) {
  const [showDetails, setShowDetails] = useState(false);

  let newMonth = new Date(dob).toLocaleString("en-US", { month: "long" });
  let arrDob = dob.split("/");
  let newDob = `${newMonth} ${arrDob[1]}, ${arrDob[2]}`;
  let onTrack =
    certifications.github === true &&
    certifications.linkedin === true &&
    certifications.mockInterview === true &&
    certifications.resume === true
      ? "True"
      : "False";

  function toggleStudentDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="student-card">
      <div className="photo">
        <img src={profilePhoto} alt={username} />
      </div>
      <div>
        <h2 className="student-name">
          {names.preferredName +
            " " +
            names.middleName.charAt(0) +
            ". " +
            names.surname}
        </h2>
        <h4>{username}</h4>
        <h4>
          <span className="birthday">Birthday: </span>
          {newDob}
        </h4>
        <button className="show-hide" onClick={toggleStudentDetails}>
          {!showDetails ? "Show More..." : "Show Less..."}
        </button>
        {
          <StudentDetails
            cohort={cohort}
            codewars={codewars}
            certifications={certifications}
            notes={notes}
            showDetails={showDetails}
          />
        }
      </div>
      <div className="on-track">
        <span>
          On Track to Graduate:{" "}
          <p className={onTrack === "True" ? "check" : "uncheck"}>{onTrack}</p>
        </span>
      </div>
    </div>
  );
}

export default StudentCard;
