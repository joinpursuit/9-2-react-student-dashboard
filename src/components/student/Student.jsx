export default function Student({ student }) {
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
          <p>
            <a href="">Show More...</a>
          </p>
        </div>
        <div className="on-track">
          <a href="">On Track to Graduate</a>
        </div>
      </div>
    </li>
  );
}
