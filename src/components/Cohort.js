const Cohorts = ({
    cohorts,
    cohortListAside,
    setCohortClicked,
    setShowStudentDetailsBool,
    splitString,
    setResetStudentDetails,
  }) => {
    // 1.fired by click event in each cohort li, sets the string state in app js. and passes it to the filter
    //2. sets a piece of state to false to reset the student data output to not showing. Gets passed up to App.js to student
    let searchCohort = (e) => {
      setCohortClicked(e.target.id);
      setResetStudentDetails(false);
    };
  
    return (
      <div className="aside" onLoad={cohortListAside}>
        <h3 id="cohortH2">Classes by Start-Date</h3>
        <ul>
          <li className="cohorts" id={"All Students"} onClick={searchCohort}>
            All Students
          </li>
          <hr></hr>
          {cohorts.map((cohort, i) => {
            return (
              <li className="cohorts" id={cohort} onClick={searchCohort}>
                {splitString(cohort)}
                <hr></hr>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  
  export default Cohorts;