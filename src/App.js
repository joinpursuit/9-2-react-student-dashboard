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
      <div className="circle"></div>
        <h1 className="heading">Student Dashboard</h1>
        <div className="circle"></div>
        <svg>
          <filter id="wavy">
            <feTurbulence x='0' y='0' baseFrequency='0.009' numOctaves='5' seed='2'>
            </feTurbulence>
            <feDisplacementMap in="sourceGraphic" scale='30'></feDisplacementMap>
          </filter>
        </svg>
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
          <h1 className="changing-cohort-date">{cohortDisplay}</h1>
          <h2 className="changing-cohort-date">Total Count: {changeCohortDisplay.length}</h2>
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
