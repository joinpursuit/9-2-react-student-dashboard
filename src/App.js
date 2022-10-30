import React, { useReducer, useState } from "react";
import "./App.css";
import datas from "./data/data.json";
import StudentList from "./Components/StudentList";
import CohortList from "./Components/CohortList";

const App = () => {
  const [totalAmountOfStudents, setTotalAmountOfStudents] = useState(
    datas.length
  );
  const [filterCohort, setFilterCohort] = useState("All students");

  return (
    <main>
      <h1>Student Dashboard</h1>
      <div className="FullList">
        <StudentList
          datas={datas}
          totalAmountOfStudents={totalAmountOfStudents}
          setTotalAmountOfStudents={setTotalAmountOfStudents}
          filterCohort={filterCohort}
        />
      </div>

      <CohortList
        datas={datas}
        filterCohort={filterCohort}
        setFilterCohort={setFilterCohort}
      />
      <button
        className="back-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Back to top
      </button>
    </main>
  );
};

export default App;
