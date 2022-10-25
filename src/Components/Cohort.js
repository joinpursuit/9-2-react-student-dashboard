function GetAllCohorts({ data, setTitle, setStudentData }) {
  const allCohorts = [
    ...new Map(
      data.map((student) => [student.cohort.cohortCode, student])
    ).keys(),
  ]
    .sort((a, b) => b.slice(-4) - a.slice(-4))
    .reverse();

  function handleClick(e) {
    if (e.target.id !== "all-students") {
      data = data.filter(({ cohort }) => {
        return cohort.cohortCode === e.target.id;
      });
      setTitle(e.target.id.slice(0, -4) + " " + e.target.id.slice(-4));
      setStudentData(data);
    } else {
      setTitle("All Students");
      setStudentData(data);
    }
  }

  return (
    <div>
      <h1 className="cohorts">Choose a Class by Start Date</h1>
      <br />
      <div className="start-date">
        <ul>
          <li className="cohort-list" onClick={handleClick} id="all-students">
            All Students
          </li>
          <br />
          {allCohorts.map((cohort) => {
            return (
              <li
                className="cohort-list"
                key={cohort}
                onClick={handleClick}
                id={cohort}
              >
                {cohort.slice(0, -4) + " " + cohort.slice(-4)}
                <hr></hr>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default GetAllCohorts;
