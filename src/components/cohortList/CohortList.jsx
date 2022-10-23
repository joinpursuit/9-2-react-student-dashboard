import { useState, useEffect } from "react";
import "./CohortList.css";

export default function CohortList({ cohortCodes, filterStudentsByCohort }) {
  return (
    <div className="cohort-list-container">
      <h3>Choose a Class by Start Date</h3>
      <ul>
        <li key="all" onClick={() => filterStudentsByCohort("All Students")}>
          All Students
        </li>
        {cohortCodes &&
          Object.entries(cohortCodes).map((cohort, i) => (
            <li key={i} onClick={() => filterStudentsByCohort(cohort[0])}>
              {cohort[0].slice(0, -4)} {cohort[0].slice(-4)}
            </li>
          ))}
      </ul>
    </div>
  );
}
