import React from "react";
import data from "./data/data";
import ProfileList from "./components/ProfileList";
import "./App.css";
import Cohort from "./components/Cohort";

function App() {
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
            <Cohort />
          </div>

          <div className="profileList">
            <h1>All Students</h1>
            <span>Total Students:</span>
            <ProfileList props={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
