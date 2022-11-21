import students from "./data/data.json";
import StudentList from "./Components/StudentList";
import { useState } from "react";
import CohortList from "./Components/CohortList";

function App() {
  const [cohort, setCohort] = useState(students);

  function handleCohortSelect(cohortCode) {
    const cohortArr = students.filter((student) => {
      return student.cohort.cohortCode === cohortCode;
    });
    setCohort(cohortArr);
    // return { cohortCode: cohortArr };
  }

  function handleHumanReadableCohort(cohortCode) {
    const cohortArr = cohortCode.split("");
    let i = cohortCode.indexOf("2");
    cohortArr.splice(i, 0, " ");
    return cohortArr.join("");
  }

  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <CohortList
        students={students}
        handleCohortSelect={handleCohortSelect}
        handleHumanReadableCohort={handleHumanReadableCohort}
        setCohort={setCohort}
      />
      <StudentList
        students={students}
        cohort={cohort}
        handleHumanReadableCohort={handleHumanReadableCohort}
      />
    </div>
  );
}

export default App;
