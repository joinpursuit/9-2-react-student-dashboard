import AdditionalInfo from "./AdditionalInfo";
import { useState } from "react";

export default function Student({ student, allNotes, setAllNotes}) {
  let fullName = `${student.names.preferredName} ${student.names.middleName[0]}. ${student.names.surname}`;
  const [moreInfo, setMoreInfo] = useState(false);
  

  let onTrack;
  if (
    student.certifications.resume &&
    student.certifications.linkedin &&
    student.certifications.github &&
    student.certifications.mockInterview && 
    (student.codewars.current.total >= 600)
  ) {
    onTrack = <div className="onTrack"> On Track to Graduate </div>;
  }

  const monthNames = [
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
    "December",
  ];
  let birthday = student.dob.split("/");
  let [month, day, year] = birthday
  const d = new Date(month);
  birthday = `${monthNames[d.getMonth()]} ${day}, ${year}`;

  return (
    <div className="Student">
      <div className="studentBase">
        <img src={student.profilePhoto} alt="Profile" />
        <div>
          <h3>{fullName}</h3>
          <p>{student.username}</p>
          <p> <span>Birthday:</span> {birthday}</p>
          <button onClick={() => setMoreInfo(!moreInfo)}>{!moreInfo ? "Show More...": "Show Less..."}</button>
        </div>
        {onTrack}
      </div>
      {moreInfo ? <AdditionalInfo student={student} allNotes={allNotes} setAllNotes={setAllNotes}/> : ""}
    </div>
  );
}
