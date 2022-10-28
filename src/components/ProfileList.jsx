import React from "react";
import ShowMoreButton from "./ShowMoreButton";

function ProfileList({ data }) {
  // const onTrack = <span>On Track to Graduate</span>;

  // function onTrack (data) {
  //   data.forEach((e) => {

  //   })
  // }

  const onTrack = <h5 id="onTrack">Set to Graduate</h5>;

  return (
    <div id="List">
      <h1>All Students</h1>
      <span>Total Students:{data.length}</span>
      {data.map((e) => {
        return (
          <div className="card" key={e.id}>
            <img src={e.profilePhoto} className="face" alt="profile-picture" />
            <h2 id="element">
              {e.names.preferredName} {e.names.middleName[0] + "."}{" "}
              {e.names.surname}
            </h2>

            <h5 id="element">
              Cohort:{" "}
              {e.cohort.cohortCode.split("").slice(0, -4).join("") +
                " " +
                e.cohort.cohortCode.slice(1).slice(-4)}
            </h5>
            <h5 id="element">
              Email: <a href={e.username}>{e.username}</a>
            </h5>
            <h5 id="element">Birthday: {e.dob}</h5>
            {e.certifications.resume &&
            e.certifications.linkedin &&
            e.certifications.github &&
            e.certifications.mockInterview &&
            e.codewars.current.total > 600
              ? onTrack
              : null}

            <ShowMoreButton props={e.id} />
          </div>
        );
      })}
    </div>
  );
}

export default ProfileList;
