import { useState } from "react";
import data from "./data/data.json";
import GetAllCohorts from "./Components/Cohort";
import CohortsChange from "./Components/Students";

function App() {
  const [title, setTitle] = useState("All Students");
  const [studentData, setStudentData] = useState(data);

  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <div className="container">
        <div>
          <GetAllCohorts
            data={data}
            setTitle={setTitle}
            setStudentData={setStudentData}
          />
        </div>
        <div>
          <CohortsChange studentData={studentData} title={title} />
        </div>
      </div>
    </div>
  );
}

export default App;
