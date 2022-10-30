import StudentList from "./components/StudentList";
import data from "./data/data.json";
import { useState } from "react";
import CohortList from "./components/CohortList";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("All Students");
  const [filterTitle, setFilterTitle] = useState("All Students")

  let filteredStudents = data.filter(student => student.cohort.cohortCode === filter)

  let condition = filter !== "All Students" ? filteredStudents : data; 

  const [allNotes, setAllNotes] = useState([]);

  function handleFilterChange(e, cohort) {
    e.preventDefault();
    if(cohort === "All Students"){
      return setFilter("All Students");
    }
    setFilterTitle(cohort);
    setFilter(cohort.split(" ").join(""));
  }

  // function addNote(id, text){
  //   for(let i = 0; i < data.length; i++){
  //     if(id === data[i].id){
  //       data[i].notes.push(text);
  //       console.log(data[i]);
  //       return
  //     }
  //   }
  // }

  return (
    <div className="App">
      <header>
        <h1>Student Dashboard</h1>
      </header>
      <main>
        <div className="sideBar">
          <h2> Choose a Class by Start Date</h2>
          <CohortList
            data={data}
            handleFilterChange={handleFilterChange}
            setFilter={setFilter}
          />
        </div>
        <div className="mainContent">
          <h2>{filterTitle}</h2>
          <p> Total Students: <span>{condition.length}</span>  </p>
          <StudentList condition={condition} allNotes={allNotes} setAllNotes={setAllNotes}/>
        </div>
      </main>
    </div>
  );
}

export default App;
