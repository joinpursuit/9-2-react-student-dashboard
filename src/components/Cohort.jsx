import React from "react";

function Cohort({ setCohort }) {
  function HandleState(e) {
    const elementTitle = document.getElementById("cohort-title");
    elementTitle.innerText = e.target.innerText;
    e.target.innerText === "All Students"
      ? setCohort(e.target.innerText)
      : setCohort(e.target.innerText.split(" ").join(""));
  }

  return (
    <div className="cohort-container">
      <h3 className="cohort-title">Choose a Class by Start Date</h3>
      <ul className="cohort-list">
        <li onClick={HandleState}>All Students</li> <hr />
        <li onClick={HandleState}>Winter 2026</li>
        <hr />
        <li onClick={HandleState}>Fall 2026</li>
        <hr />
        <li onClick={HandleState}>Summer 2026</li>
        <hr />
        <li onClick={HandleState}>Spring 2026</li>
        <hr />
        <li onClick={HandleState}>Winter 2025</li>
        <hr />
        <li onClick={HandleState}>Fall 2025</li>
        <hr />
        <li onClick={HandleState}>Summer 2025</li>
        <hr />
        <li onClick={HandleState}>Spring 2025</li>
        <hr />
      </ul>
    </div>
  );
}

export default Cohort;
