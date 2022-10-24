import { useState } from "react";
import data from "./data/data.json";
import GetAllCohorts from "./Components/Cohort";
import HandleCohortsChange from "./Components/Students";

function App() {
  const [title, setTtitle] = useState("All Students");
  const [studentData, setStudentData] = useState(data);

  console.log(data);

  return (
    <div>
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <div className="container">
        <div>
          <GetAllCohorts
            data={data}
            setTtitle={setTtitle}
            setStudentData={setStudentData}
          />
        </div>
        <div>
          <HandleCohortsChange studentData={studentData} title={title} />
        </div>
      </div>
    </div>
  );
}

export default App;
