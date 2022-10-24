function GetAllCohorts({ data, setTtitle, setStudentData }) {
  const allCohorts = [
    ...new Map(
      data.map((student) => [student.cohort.cohortCode, student])
    ).keys(),
  ]
    .sort((a, b) => b.slice(-4) - a.slice(-4))
    .reverse();
  console.log(allCohorts);

  function handleClick(e) {
    console.log(e);
    console.log(e.target.id);

    if (e.target.id !== "all-students") {
      data = data.filter(({ cohort }) => {
        return cohort.cohortCode === e.target.id;
      });
      setTtitle(e.target.id.slice(0, -4) + " " + e.target.id.slice(-4));
      setStudentData(data);
      console.log(data);
    } else {
      setTtitle("All Students");
      setStudentData(data);
    }
  }

  return (
    <div>
      <h1 className="cohorts">Choose a Class by Start Date</h1>
      <br />
      <div className="start-date">
        <ul>
          <li onClick={handleClick} id="all-students">
            All Students
          </li>
          <hr />
          {allCohorts.map((cohort) => {
            return (
              <li key={cohort} onClick={handleClick} id={cohort}>
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
