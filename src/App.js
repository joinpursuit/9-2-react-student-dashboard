import students from "./data/data.json";
import StudentList from "./Components/StudentList";
import { useState } from "react";
import CohortList from "./Components/CohortList";

function App() {
  const [cohort, setCohort] = useState("All Students");

  function handleCohortSelect() {}

  function handleHumanReadableCohort(cohortCode) {
    const cohortArr = cohortCode.split("");
    let i = cohortCode.indexOf("2");
    cohortArr.splice(i, 0, " ");
    return cohortArr.join("");
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList
        students={students}
        handleCohortSelect={handleCohortSelect}
        handleHumanReadableCohort={handleHumanReadableCohort}
      />
      <StudentList students={students} />
    </div>
  );
}

export default App;
