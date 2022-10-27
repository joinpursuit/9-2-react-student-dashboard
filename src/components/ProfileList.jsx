import React from "react";
import ShowMoreButton from "./ShowMoreButton";



function ProfileList({ props }) {
  const onTrack = <span>On Track to Graduate</span>;
  
  return (
    <div className="List">
      {props.map((e) => {
        return (

          <div className="card" key={e.id}>
            <img
              src={e.profilePhoto}
              className="face"
              alt="profile-picture"
            />
            <h2 id="element">
              {e.names.preferredName} {e.names.middleName[0] + "."}{" "}
              {e.names.surname}
            </h2>
            
            <h5 id="element">Cohort: {e.cohort.cohortCode}</h5>
            <h5 id="element">
              Email: <a href={e.username}>{e.username}</a>
            </h5>
            <h5 id="element">Birthday: {e.dob}</h5>
              {
                e.certifications.resume && e.certifications.linkedin && e.certifications.github && e.certifications.mockInterview && e.codewars.current.total > 600 ? 
                  onTrack : false
                  }
                  <h5>{onTrack}</h5>
            <ShowMoreButton props={e.id} />
          </div>
        );
      }).slice(0, 5)}
    </div>
  );
}

export default ProfileList;
