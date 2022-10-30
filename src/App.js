import { useState } from "react";
import Classes from "./components/Classes";
import Students from "./components/Students";
import data from "./data/data.json";
import Search from "./components/Search";
import "./App.css";


function App() {


const [theme, setTheme] = useState("light")

// const themeToggler = () => {
//   theme === "light" ? setTheme("dark") : setTheme("light");
// }

  const [userSelect, setUserSelect] = useState("All Students");
  const [searchTerm, setSearchTerm] = useState("")

  const selectedStudents = data.filter(student => student.cohort.cohortCode === userSelect && Object.values(student.names).some((e) => {
return e.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm
  }))

  const notes = {}
  data.forEach((student) => notes[student.id] = student.notes)
  

const [studentNotes, setStudentNotes] = useState(notes)

function updatedNotesForStudent(studentID, commenter, comment){
studentNotes[studentID].push({commenter, comment})
setStudentNotes({...studentNotes})
}


  return (
    // <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <div className="App">
     

      <aside className="sidebar">
        
        <div>
          Pursuit Dashboard
        </div>
        <br/>
        <h3>Search for Student</h3>
        <nav className="menu">
       <br/>
          <Search setSearchTerm={setSearchTerm}/>
          <br />
          <Classes
        data={data}
        setUserSelect={setUserSelect}
        userSelect={userSelect}
        selectedStudents={selectedStudents}
      />
        </nav>
      </aside>

      <main className="content">
        <Students data={selectedStudents} studentNotes={studentNotes} updatedNotesForStudent={updatedNotesForStudent} />
      </main>
      
    </div>
    
  );
}

export default App;
