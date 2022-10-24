import { useState } from "react";
import HandleStudentDetails from "./Details";

function StudentCard({ names, username, profilePhoto, dob, certifications, codewars, cohort, notes }) {
const [showDetails, setShowDetails] = useState(false)

  let newMonth = new Date(dob).toLocaleString("en-US", { month: "long" });
  let arrDob = dob.split("/");
  let newDob = `${newMonth} ${arrDob[1]}, ${arrDob[2]}`;
  let onTrack = certifications.github === true && certifications.linkedin === true && certifications.mockInterview === true && certifications.resume === true ? "True" : "False"
  // // console.log(certifications)

  function toggleStudentDetails() {
    setShowDetails(!showDetails)
  }


  return (
    <div className="student-card">
      <div className="photo">
        <img src={profilePhoto} alt={username } />
      </div>
      <div>
        <h2>
          {names.preferredName +
            " " +
            names.middleName.charAt(0) +
            ". " +
            names.surname}
        </h2>
        <h3>{username}</h3>
        <h3>
          <span className="birthday">Birthday: </span>
          {newDob}
        </h3>
        <button className="show-hide" onClick={toggleStudentDetails}>{!showDetails ? "Show More..." : "Show Less..."}</button>
        {showDetails ? <HandleStudentDetails cohort={cohort} codewars={codewars} certifications={certifications} notes={ notes} /> : null}
      </div>
        <div className="on-track">
        <span>On Track to Graduate: <p className={onTrack === "True" ? "check" : "uncheck"}>{onTrack}</p></span>
        </div>
    </div>
  );
}

export default StudentCard;