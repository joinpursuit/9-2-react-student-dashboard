import React from "react";
import data from "./data/data";
import ProfileList from "./components/ProfileList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        {" "}
        <h1>Student Dashboard</h1>
      </header>
      <ProfileList data={data} />

      
    </div>
  );
}

export default App;
