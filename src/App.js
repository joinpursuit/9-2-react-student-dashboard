import { useEffect, useState } from "react";
import CohortList from "./components/cohortList/CohortList";
import Navbar from "./components/navbar/Navbar";
import StudentList from "./components/studentList/StudentList";
import data from "./data/data.json";

function App() {
  const [students, setStudents] = useState(data);
  const [filteredStudents, setFilteredStudents] = useState(data);
  const [cohortCodes, setCohortCodes] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState("All Students");

  function filterStudentsByCohort(cohort) {
    let newStudents;
    if (cohort === "All Students") {
      newStudents = students;
    } else {
      newStudents = students.filter(
        (student) => student.cohort.cohortCode === cohort
      );
    }
    setSelectedCohort(cohort);
    setFilteredStudents(newStudents);
  }

  function addNoteToStudent(studentId, newNoteObj) {
    const newStudentsArr = [...students];
    const indexOfstudentToUpdate = students.findIndex(
      (student) => student.id === studentId
    );
    newStudentsArr[indexOfstudentToUpdate].notes.push(newNoteObj);
    setStudents(newStudentsArr);
  }

  useEffect(() => {
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
    }

    getUniqueCohortCodes(data);
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
          addNoteToStudent={addNoteToStudent}
        />
      </main>
    </div>
  );
}

export default App;
