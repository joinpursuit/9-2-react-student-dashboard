import { useEffect, useState } from "react";
import CohortList from "./components/cohortList/CohortList";
import Navbar from "./components/navbar/Navbar";
import StudentList from "./components/studentList/StudentList";
import data from "./data/data.json";

function App() {
  const [students, setStudents] = useState(data);
  const [filteredStudents, setFilteredStudents] = useState(data);
  const [cohortCodes, setCohortCodes] = useState(null);
  const [selectedCohort, setSelectedCohort] = useState("All Students");

  function filterStudentsByCohort(cohort) {
    console.log(cohort);
    let newStudents;
    if (cohort === "All Students") {
      newStudents = data;
    } else {
      newStudents = students.filter(
        (student) => student.cohort.cohortCode === cohort
      );
    }
    console.log(newStudents);
    setSelectedCohort(cohort);
    setFilteredStudents(newStudents);
  }

  function getUniqueCohortCodes(array = []) {
    const codesObj = {};
    if (array.length) {
      for (let student of array) {
        const code = student.cohort.cohortCode;
        if (code in codesObj) {
          codesObj[code]++;
        } else {
          codesObj[code] = 1;
        }
      }
      setCohortCodes(codesObj);
    }
    console.log(cohortCodes);
  }

  useEffect(() => {
    getUniqueCohortCodes(students);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <CohortList
          cohortCodes={cohortCodes}
          filterStudentsByCohort={filterStudentsByCohort}
        />
        <StudentList
          students={filteredStudents}
          selectedCohort={selectedCohort}
        />
      </main>
    </div>
  );
}

export default App;
