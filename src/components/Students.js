import { useState } from "react";
import data from "../data/data.json";
export default function Students({ cohort, setCohort }) {
  const [students, setStudents] = useState(data);

  let totalStudents = students.length;
  console.log(cohort);
  /**notes: filterByCohort should also change the value of total students based on selected cohort*/

  // students.map((student) => {});

  const newBirthday = (date) => {
    const dob = new Date(date);
    const month = dob.toLocaleString("default", {month: "long"})
    const day = dob.getDate()
    const year = dob.getFullYear()
    return month + " " + day + ", " + year
  };
  console.log(new Date("2/3/1979"))



  // if(cohort) {
  // }
  return (
    <>
      {cohort ? (
        <section>
        <h3>Lis of all Students</h3>

        <h5>
          Total Students: <span className="highlights">{totalStudents}</span>
        </h5>

        <ul>
          {students.filter((fellow) => fellow.cohort.cohortCode  === cohort).map((fellow) => {
              return (
                <li key={fellow.id}>
                  {/* <img src={fellow.profilePhoto} width="90" height="90" /> */}

                  <p>{fellow.names.surname}</p>
                  <p>{fellow.username}</p>
                  <p>
                    <span className="highlights">Birthday:</span> {newBirthday(fellow.dob)}
                  </p>

                  <button className="showMore">Show More...</button>
                </li>
              );
            })
          
          }
        </ul>
      </section>
      ) : (
        <section>
        { cohort ? <h3>cohort</h3> : <h3>All Students</h3>}

          <h5>
            Total Students: <span className="highlights">{totalStudents}</span>
          </h5>

          <ul>
            {students.map((fellow) => {
              return (
                <li key={fellow.id}>
                  {/* <img src={fellow.profilePhoto} width="90" height="90" /> */}

                  <p>{fellow.names.surname}</p>
                  <p>{fellow.username}</p>
                  <p>
                    <span className="highlights">Birthday:</span> {newBirthday(fellow.dob)}
                  </p>

                  <button className="showMore">Show More...</button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
      {/* <h1>{bool? hello : goodbye}</h1> */}
    </>
  );
}
