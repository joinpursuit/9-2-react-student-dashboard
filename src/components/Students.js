import Student from "./Student";
const Students = ({
  students,
  filteredCohortInfoData,
  cohortClicked,
  splitString,
  resetStudentDetails,
}) => {
  return (
    <div className="main">
      <h2>
        {cohortClicked === "All Students"
          ? cohortClicked
          : splitString(cohortClicked)}
      </h2>
      <h3>Total Students: {filteredCohortInfoData.length} </h3>

      {filteredCohortInfoData.map((student) => {
        //************ RETURN ***********/
        return (
          <>
            <Student
              student={student}
              students={students}
              resetStudentDetails={resetStudentDetails}
            />
          </>
        );
      })}
    </div>
  );
};

export default Students;