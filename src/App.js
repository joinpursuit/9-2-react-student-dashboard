import { useEffect, useState } from "react";
import CohortList from "./components/cohortList/CohortList";
import Navbar from "./components/navbar/Navbar";
import StudentList from "./components/studentList/StudentList";
import students from "./data/data.json";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <CohortList students={students} />
        <StudentList students={students} />
      </main>
    </div>
  );
}

export default App;
