function StudentCard({ names, username, profilePhoto, dob }) {
  return (
    <div className="student-card">
      <div className="photo">
        <img src={profilePhoto} />
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
          {dob}
        </h3>
        <a>Show More...</a>
      </div>
    </div>
  );
}

export default StudentCard;
