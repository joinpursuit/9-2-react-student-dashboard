import React from "react";
import { useState } from "react";
import data from "./data/data";
import ProfileList from "./components/ProfileList";
import "./App.css";
import Cohort from "./components/Cohort";


function filterProfileList(strParam) {
  return data.filter((e) => {
   return e.cohort.cohortCode === strParam 
  });
}

let selectedCohort="All Students"

function App() {
  const [cohort, setCohort] = useState("Winter2026");

  return (
    <div className="App">
      <div className="header">
        <header>
          {" "}
          <h1>Student Dashboard</h1>
        </header>
      </div>

      <main>
        <div className="main-container">
          <div className="cohort">
            <Cohort setCohort={setCohort}/>
          </div>

          <div className="profileList">
            <ProfileList data={filterProfileList(cohort)}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
