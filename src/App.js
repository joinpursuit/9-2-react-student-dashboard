import { useState } from "react";
import studentInfo from "./data/data.json"
import DisplayAllStudents from "./Components/Total";
import Cohort from "./Components/Cohort";

function App() {
  

const [studentCount, setstudentCount] = useState([])

// let totalStudents = studentInfo.reduce((acc, students) => acc + students, 0);

// function allStudents(setstudentCount) {
//     studentCount(totalStudents)
// }
// console.log(allStudents())
// console.log(studentCount, allStudents)

// function fuckOff(){
//   if (studentInfo === studentInfo) {
//     studentCount.push(studentInfo.length)
//    setstudentCount(studentCount) 
//   }
// }

  return (
    <div>
      <header><h1>Student Dashboard</h1></header> 
      <div className="container">

<div className="startDate">
<Cohort />
</div>
<div className="allStudents">
      <h1>All Students</h1>
      <DisplayAllStudents studentCount= {studentCount}  setstudentCount={setstudentCount} studentInfo={studentInfo} />
      </div>
</div>
    </div>
  );
}

export default App;
