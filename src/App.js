import students from "./data/data.json";
import CohortCodeList from "./components/cohortCodeList";
import CohortDetails from "./components/cohortDetails";
import { useState } from "react";



function App() {
  const [cohortList,updateCohortList] = useState(students);
  const [displayTitle,updateTitle] = useState("All Students");
  return (
    <div>
      <div className="header">
        <h2>Student Dashboard</h2>
      </div>
      <div className="main">
        <div className="sidebar">
          
          <CohortCodeList students={students} updateCohortList={updateCohortList} updateTitle={updateTitle}/>
        </div>
        <div className="studentscontent">
          <CohortDetails cohortList={cohortList} displayTitle={displayTitle}/>
        </div>
      
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
