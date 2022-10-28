import { useState } from "react";
import CohortList from "./components/cohortList/CohortList";
import Navbar from "./components/navbar/Navbar";
import OnTrackStudents from "./components/onTrackStudents/OnTrackStudents";
import SearchByName from "./components/searchByName/SearchByName";
import StudentList from "./components/studentList/StudentList";
import data from "./data/data.json";

function App() {
  const [students, setStudents] = useState(data);
  const [filteredStudents, setFilteredStudents] = useState(data);
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

  function searchStudents(e) {
    const searchInput = e.target.value.trim().toLowerCase();
    const foundStudents = students.filter(({ names }) =>
      Object.values(names).join("").toLowerCase().includes(searchInput)
    );
    console.log(foundStudents);
    setFilteredStudents(foundStudents);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="search-bar">
        <SearchByName searchStudent={searchStudents} />
        <OnTrackStudents
          students={students}
          setFilteredStudents={setFilteredStudents}
        />
      </div>
      <main>
        <CohortList
          students={students}
          filterStudentsByCohort={filterStudentsByCohort}
        />
        <StudentList
          filteredStudents={filteredStudents}
          selectedCohort={selectedCohort}
          addNoteToStudent={addNoteToStudent}
        />
      </main>
    </div>
  );
}

export default App;
