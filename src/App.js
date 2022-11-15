import CreateCard from "./components/Card";
import { data } from "./data/data";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import MoreDetails from "./components/MoreDetails";
import "./App.css"

function App() {
  const [title,setTitle]=useState("All Students")
  const [display,setDisplay]=useState(getDatabyCohort(data,"All Students"))
  
  function getDatabyCohort(data,cohort){
    let NewData
   
    if (cohort==="All Students"){
     return data.map(student=>{
      
        return <CreateCard student={student}  />
      })
      }
    // console.log({data})
     NewData= data.filter(student=>student.cohort.cohortCode===cohort).map(student=>{
      return <CreateCard student={student}  />
    
    
  })
  
  
  return NewData
  }

console.log(display.length)

  return (
    <div className="main-page">
      <header>
      <h1>Student Dashboard</h1></header>
      <div className="main-display">
     <aside>
      <h2 className="options-Title">Choose a Class by Start Date</h2>
      <Sidebar className="sidebar" setDisplay={setDisplay} getDatabyCohort={getDatabyCohort} setTitle={setTitle}/>
      </aside>
      <main>
        <h2>{title}</h2>
        <h4>Total Students: {display.length} </h4>
      <div className="display">{display}</div>
       </main>
      </div>
    </div>
  );
}

export default App;
