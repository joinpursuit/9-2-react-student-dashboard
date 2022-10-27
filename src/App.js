import { useState } from "react";
import data from "./data/data.json";
import Header from "./Components/Header";
import GetAllCohorts from "./Components/Cohort";
import CohortsChange from "./Components/Students";

function App() {
  //setting state for the header. the default will be all students upon arrival to the page
  const [title, setTitle] = useState("All Students");
 //setting state for the data shown. the default will be from the data json upon arrival to the page
  const [studentData, setStudentData] = useState(data);

  return (
    <div>
      <Header />
      <div className="container">
        <GetAllCohorts
          data={data}
          setTitle={setTitle}
          setStudentData={setStudentData}
        />
        <CohortsChange studentData={studentData} title={title} />
      </div>
    </div>
  );
}

export default App;
