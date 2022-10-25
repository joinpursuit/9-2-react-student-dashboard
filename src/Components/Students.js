import StudentCard from "./Student";

function CohortsChange({ studentData, title }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <h3>Total Students: <span className="student-count">{studentData.length}</span></h3>
      {studentData.map(
        ({
          id,
          names,
          username,
          profilePhoto,
          dob,
          certifications,
          codewars,
          cohort,
          notes,
        }) => {
          return (
            <div key={id}>
              <StudentCard
                id={id}
                names={names}
                username={username}
                profilePhoto={profilePhoto}
                dob={dob}
                certifications={certifications}
                codewars={codewars}
                cohort={cohort}
                notes={notes}
              />
            </div>
          );
        }
      )}
    </div>
  );
}

export default CohortsChange;
