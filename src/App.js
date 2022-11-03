import { useState } from "react";
import data from "./data/data.json";
import Header from "./Components/Header";
import GetAllCohorts from "./Components/Cohort";
import CohortsChange from "./Components/Students";
import Searchbox from "./Components/Searchbox";

function App() {
  //setting state for the header. the default will be all students upon arrival to the page
  const [title, setTitle] = useState("All Students");
  //setting state for the data shown. the default will be from the data json upon arrival to the page
  const [studentData, setStudentData] = useState(data);
  //setting state for the inputted student
  const [search, setSearch] = useState("");
  //setting state for the result of the search
  const [searchResult, setSearchResult] = useState(data);

  //function to add note to a student and have it persists when cohorts are changed
  function addNoteToStudent(id, obj) {
    const newStudentsArr = [...studentData];
    const index = studentData.findIndex((student) => student.id === id);
    newStudentsArr[index].notes.push(obj);
    setStudentData(newStudentsArr);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <GetAllCohorts
          data={data}
          setTitle={setTitle}
          setStudentData={setStudentData}
        />
        <div>
          <br />
          <Searchbox
            setStudentData={setStudentData}
            search={search}
            setSearch={setSearch}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
          <div className="right-side">
            <CohortsChange
              studentData={studentData}
              title={title}
              addNoteToStudent={addNoteToStudent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
