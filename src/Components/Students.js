import StudentCard from "./Student";

function CohortsChange({ studentData, title }) {
  //this component handles all of the student data and will be adjusted as needed when the state for the student data and title is updated. this component maps thru all of the student data once and passing props down to its child component
  return (
    <div>
      <h1 className="title">{title}</h1>
      <h3>
        Total Students:{" "}
        <span className="student-count">{studentData.length}</span>
      </h3>
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
              <br />
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
