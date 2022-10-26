import { useState } from "react";
import ShowMore from "./ShowMore";

function DisplayAllStudents({
  studentCount,
  setstudentCount,
  changeCohortDisplay,
  moreDetails,
  setMoreDetails,
}) {
  function totalStudents(student) {
    setstudentCount([...studentCount, student]);
  }

  function toggleShowMore(e) {
    e.preventDefault();
    setMoreDetails(!moreDetails);
  }

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
            data.codewars.current.total;

          return (
            <div>
              <li key={data.id} className="liInfo">
                <img src={data.profilePhoto} /> 
                <br />
                
                <div>
                  <h3>{data.names.preferredName + " " + data.names.surname}</h3>
                  <p>Birthday: {newBirth}</p>
                  {data.username}
                  <br />
                  <span>
                    <button onClick={(e) => toggleShowMore(e)}>
                      {!moreDetails ? "Show More" : "Show Less"}
                    </button>
                    <div className="ex-info">
                      {moreDetails ? <ShowMore data={data} /> : null}
                    </div>
                  </span>

                </div>
                <div className="onTrack"><h4> {Track ? "On Track To Graduate" : " "}</h4></div>
              </li>
            </div>
          );
        })}
      </ul>
    </main>
  );
}

export default DisplayAllStudents;
