import StudentCard from "./Student";

function HandleCohortsChange({ studentData, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>Total Students: {studentData.length}</h3>
      {studentData.map(({ id, names, username, profilePhoto, dob }) => {
        return (
          <div key={id}>
            <StudentCard
              id={id}
              names={names}
              username={username}
              profilePhoto={profilePhoto}
              dob={dob}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HandleCohortsChange;
