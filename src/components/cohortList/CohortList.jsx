import { useState, useEffect } from "react";
import "./CohortList.css";

export default function CohortList({ students, filterStudentsByCohort }) {
  const [cohortCodes, setCohortCodes] = useState([]);

  useEffect(() => {
    function getUniqueCohortCodes(array = []) {
      const codesObj = {};
      if (array.length) {
        for (let student of array) {
          const code = student.cohort.cohortCode;
          if (code in codesObj) {
            codesObj[code]++;
          } else {
            codesObj[code] = 1;
          }
        }
        const sortedArr = Object.keys(codesObj).sort(
          (a, b) => b.slice(-4) - a.slice(-4)
        );
        setCohortCodes(sortedArr);
      }
    }

    getUniqueCohortCodes(students);
  }, []);

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
