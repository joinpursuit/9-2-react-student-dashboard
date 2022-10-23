import { useEffect, useState } from "react";
import CohortList from "./components/cohortList/CohortList";
import Navbar from "./components/navbar/Navbar";
import StudentList from "./components/studentList/StudentList";
import data from "./data/data.json";

function App() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    setStudents(data);
    console.log(students);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <CohortList />
        <StudentList />
      </main>
    </div>
  );
}

export default App;
