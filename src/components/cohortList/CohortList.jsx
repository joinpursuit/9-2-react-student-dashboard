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
        const spaceAddedCodeseArr = Object.keys(codesObj).map(
          (code) => code.slice(0, -4) + " " + code.slice(-4)
        );

        const sorted = spaceAddedCodeseArr.sort(
          (a, b) => b.slice(-4) - a.slice(-4)
        );
        setCohortCodes(sorted);
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
            {cohort}
          </li>
        ))}
      </ul>
    </div>
  );
}
