import StudentCard from "./Student";

function HandleCohortsChange({ studentData, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>Total Students: {studentData.length}</h3>
      {studentData.map(
        ({ id, names, username, profilePhoto, dob, certifications, codewars, cohort, notes }) => {
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

export default HandleCohortsChange;
