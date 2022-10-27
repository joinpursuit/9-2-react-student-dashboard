import { useState } from "react";
import ShowMore from "./ShowMore";
import StudentCard from "./StudentCard";
function DisplayAllStudents({
  changeCohortDisplay,
}) {
  

  return (
    <main className="mainTotal">
      <ul>
        {changeCohortDisplay.map((data) => {
          let month = new Date(data.dob).toLocaleString("en-US", {
            month: "long",
          });
          let dobConstruct = data.dob.split("/");
          let newBirth = `${month} ${dobConstruct[1]}, ${dobConstruct[2]}`;

          let Track =
            data.certifications.resume &&
            data.certifications.linkedin &&
            data.certifications.github &&
            data.certifications.mockInterview &&
            data.codewars.current.total > 600;

          return (
            <StudentCard
              data={data}
              newBirth={newBirth}
              Track={Track}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default DisplayAllStudents;
