import React,{useState} from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Students from "./Components/Students";
import data from "./data/data.json";
import style from "./App.module.css";

function App() {
  const [activeCohort, setActiveCohort]= useState("");
  const cohorts = [];
  for (const student of data) {
    const cohortcode = student.cohort.cohortCode;
    const present = cohorts.find((item) => item.cohortCode === cohortcode);
    if (!present) {
      cohorts.push(student.cohort)
    }
  }
const getActiveStudents= () => {
  if (activeCohort=== '') return data;
  const students = [];
  for (const student of data) {
    if (student.cohort.cohortCode=== activeCohort) students.push(student)
  }
  return students;
}
  return (
    <div className={style.app}>
      <Header />
      <Sidebar cohorts={cohorts} updateCohort={setActiveCohort}/>
      <Students data={getActiveStudents()} activeCohort={activeCohort}/>
    </div>
  );
}

export default App;
