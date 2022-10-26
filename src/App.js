import { useState } from "react";
import studentInfo from "./data/data.json"
import DisplayAllStudents from "./Components/DisplayAllStudents";
import Cohort from "./Components/Cohort";

function App() {
  
  const [moreDetails, setMoreDetails] = useState(false);
const [studentCount, setstudentCount] = useState([]);
const [cohortDisplay, setCohortDisplay] = useState('All Students')
const [changeCohortDisplay, setChangeCohortDisplay] = useState(studentInfo)

  return (
    <div>
      <header><h1>Student Dashboard</h1></header> 
      <div className="container">

<div className="startDate">
<Cohort setCohortDisplay={setCohortDisplay} studentInfo={studentInfo} setChangeCohortDisplay={setChangeCohortDisplay}/>
</div>
<div className="allStudents">
      <h1>{cohortDisplay}</h1>
      <h2>Total Count: {changeCohortDisplay.length}</h2>
      <DisplayAllStudents studentCount= {studentCount}  setstudentCount={setstudentCount} changeCohortDisplay={changeCohortDisplay} setMoreDetails={setMoreDetails} moreDetails={moreDetails} />
      </div>
</div>
    </div>
  );
}

export default App;
