import { useState } from "react";
import data from "../data/data.json";
export default function Seasons({ cohort, setCohort }) {
  // const changeCohort = (e) => {

  //  setCohort(cohort = e.target.value)
  //   // console.log("worked");
  //  // console.log(e.target.value);
  // };

  return (
    <>
      <section className="section2">
        <h3>Choose a class by Start Date</h3>
        <h5 className="allStudents">All students</h5>
        <ul>
          <li className="cohortList">
            <button onClick={(e) => setCohort(cohort = e.target.value)} value="Spring2025">
              Spring 2025
            </button>
            <button onClick={(e) => setCohort(cohort = e.target.value)} value="Spring2025"> 
            Spring 2026
            </button>
            <button onClick={(e) => setCohort(cohort = e.target.value)} value="Spring2026">
               Summer2025
               </button>
            <button onClick={(e) => setCohort(cohort = e.target.value)} value="Summer2025"> 
            Summer 2026
            </button>
            <button onClick={(e) => setCohort(cohort = e.target.value)} value="Spring2026"> 
            Fall 2025
            </button>
            <button onClick={(e) => setCohort(cohort = e.target.value)} value="Fall2026">
               Fall 2026
               </button>
               <button onClick={(e) => setCohort(cohort = e.target.value)} value="Winter2025">
               Winter2025 
               </button>
               <button onClick={(e) => setCohort(cohort = e.target.value)} value="Winter2026">
               Winter2026
               </button>
          </li>
        </ul>
      </section>
    </>
  );
}
