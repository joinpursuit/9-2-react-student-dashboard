import { useState } from "react";

function GetAllCohorts({ data, setTitle, setStudentData }) {
  //this component is responsible for setting the student data and title by filtering data that is shown depending on which li is clicked. this also handles the order shown of the cohorts
  const [sortCohorts, setSortCohorts] = useState(false);

  let allCohorts = !sortCohorts
    ? [
        ...new Map(
          data.map((student) => [student.cohort.cohortCode, student])
        ).keys(),
      ]
        .sort((a, b) => b.slice(-4) - a.slice(-4))
        .reverse()
    : [
        ...new Map(
          data.map((student) => [student.cohort.cohortCode, student])
        ).keys(),
      ].sort((a, b) => b.slice(-4) - a.slice(-4));

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

  function toggleCohortOrder() {
    setSortCohorts(!sortCohorts);
  }

  return (
    <div>
      <h2 className="cohorts">⬇️ Choose a Class by Start Date ⬇️</h2>
      <button
        className={!sortCohorts ? "green-button" : "red-button"}
        onClick={toggleCohortOrder}
      >
        {!sortCohorts ? "Descending Order" : "Ascending Order"}
      </button>
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
