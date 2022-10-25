import React from "react";
// import data from "src/data/data"

function ProfileList({ data }) {
  return (
    <ul className="ProfileList">
      {data.map((e) => {
        return (
          <li className="profile card" key={e.id}>
            <h1>
              {e.names.preferredName} {e.names.middleName[0]+'.'} {e.names.surname}
            </h1>
            <h5>
              Email: <a href={e.username}>{e.username}</a>
            </h5>

            <img src={e.profilePhoto} className="face" />
          </li>
        );
      })}
    </ul>
  );
}

export default ProfileList;
