import "./StudentList.css";
export default function StudentList({ students }) {
  function formatDob(dob) {
    const date = new Date(dob).toLocaleDateString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  }
  return (
    <div className="student-list-container">
      <h3>Student List</h3>
      <p>Total Students: 26</p>
      <ul className="student-list">
        {students &&
          students.map((student) => (
            <li key={student.id}>
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
                </div>
                <div className="on-track">
                  <a href="">On Track to Graduate</a>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
