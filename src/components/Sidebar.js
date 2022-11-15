import { data } from "../data/data";
import createCard from "./Card";
export default function Sidebar({ setDisplay, getDatabyCohort, setTitle }) {
  let allCohortYears = ["Winter2025"];

  

  function makeTitle(title) {
    return <h4>{title}</h4>;
  }

  data.map((student) => {
    if (!allCohortYears.includes(student.cohort.cohortCode)) {
      allCohortYears.push(student.cohort.cohortCode);
    }
  });
  allCohortYears.sort((b, a) => {
    if (a.slice(a.length - 1) > b.slice(b.length - 1)) {
      return -1;
    }
    // if (a>b){
    //     return -1
    // }
  });
  return (
    <ul>
        <li className="title-Years"  onClick={() => {
                setDisplay(getDatabyCohort(data,"All Students"));
                setTitle("All Students");
              }}>All Students </li>
      
      
      {allCohortYears.map((year) => {
        let season = year.slice(0, -4);
        let titleYear = year.slice(-4);
      
        return (
          <div className="options">
            <li className="title-Years"
              key={year}
              onClick={() => {
                setDisplay(getDatabyCohort(data, year));
                setTitle(season + " " + titleYear);
              }}
            >
              {season + " " + titleYear}
            </li>
          </div>
        );
      })}
    </ul>
  );
}
