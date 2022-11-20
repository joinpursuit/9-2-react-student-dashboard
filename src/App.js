import students from "./data/data.json";
import StudentList from "./Components/StudentList";
import { useState } from "react";
import CohortList from "./Components/CohortList";

function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList students={students} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
