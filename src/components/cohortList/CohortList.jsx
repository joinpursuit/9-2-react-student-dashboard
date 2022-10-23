import { useState, useEffect } from "react";
import "./CohortList.css";

export default function CohortList({ cohortCodes, filterStudentsByCohort }) {
  cohortCodes = Object.keys(cohortCodes).sort(
    (a, b) => b.slice(-4) - a.slice(-4)
  );
  return (
    <div className="cohort-list-container">
      <h3>Choose a Class by Start Date</h3>
      <ul className="cohort-list">
        <li key="all" onClick={() => filterStudentsByCohort("All Students")}>
          All Students
        </li>

        {cohortCodes.map((cohort, i) => (
          <li key={i} onClick={() => filterStudentsByCohort(cohort)}>
            {cohort.slice(0, -4) + " " + cohort.slice(-4)}
          </li>
        ))}
      </ul>
    </div>
  );
}
