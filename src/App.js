import { useState } from "react";
import studentInfo from "./data/data.json";
import DisplayAllStudents from "./Components/DisplayAllStudents";
import Cohort from "./Components/Cohort";

function App() {
  
  const [cohortDisplay, setCohortDisplay] = useState("All Students");
  const [changeCohortDisplay, setChangeCohortDisplay] = useState(studentInfo);
  const [note, setNote] = useState(studentInfo.notes);

  console.log(studentInfo)
  return (
    <div className="Dash">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <div className="container">
        <div className="startDate">
          <Cohort
            setCohortDisplay={setCohortDisplay}
            studentInfo={studentInfo}
            setChangeCohortDisplay={setChangeCohortDisplay}
          />
        </div>
        <div className="allStudents">
          <h1>{cohortDisplay}</h1>
          <h2>Total Count: {changeCohortDisplay.length}</h2>
          <DisplayAllStudents
            changeCohortDisplay={changeCohortDisplay}
            note={note}
            setNote={setNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
