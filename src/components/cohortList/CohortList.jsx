import { useState, useEffect } from "react";
import "./CohortList.css";

export default function CohortList({ students }) {
  const [cohortCodes, setCohortCodes] = useState(null);

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
      setCohortCodes(codesObj);
    }
    console.log(cohortCodes);
  }

  useEffect(() => {
    getUniqueCohortCodes(students);
  }, []);

  return (
    <div className="cohort-list-container">
      <h3>Choose a Class by Start Date</h3>
      <ul>
        <li key="all">All Students</li>
        {cohortCodes &&
          Object.entries(cohortCodes).map((cohort, i) => (
            <li key={i}>
              {cohort[0].slice(0, -4)} {cohort[0].slice(-4)}
            </li>
          ))}
      </ul>
    </div>
  );
}
