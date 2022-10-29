import { useState } from "react";
import data from "../data/data.json";
import StudentDetails from "./StudentDetails";
export default function Students({ cohort, setCohort}) {
  const [students, setStudents] = useState(data);
  const [showMore, setShowMore] = useState(false);
  let totalStudents = students.length;

  const newBirthday = (date) => {
    const dob = new Date(date);
    const month = dob.toLocaleString("default", { month: "long" });
    const day = dob.getDate();
    const year = dob.getFullYear();
    return month + " " + day + ", " + year;
    // console.log(new Date("2/3/1979"));
  };

  const toggleStudentDetails = (e) => {
e.preventDefault()

  }
 

  console.log(students);
  return (
    <>
      {cohort ? (
        <section>
          <h3>{cohort}</h3>

          <h5>
            Total Students: <span className="highlights">{totalStudents}</span>
          </h5>

          <ul>
            {students
              .filter((fellow) => fellow.cohort.cohortCode === cohort)
              .map((fellow) => {
                return (
                  <li key={fellow.id}>
                    {fellow.certifications.resume &&
                    fellow.certifications.linkedin &&
                    fellow.certifications.github &&
                    fellow.certifications.mockInterview &&
                    fellow.codewars.current.total ? (
                      <p className="onTrack">On Track to Graduate</p>
                    ) : null}
                    {/* <img src={fellow.profilePhoto} width="100" height="100" /> */}

                    <p>{fellow.names.preferredName} {fellow.names.surname}</p>

                    <p>{fellow.username}</p>
                    <p>
                      <span className="highlights">Birthday:</span>{" "}
                      {newBirthday(fellow.dob)}
                    </p>
                    <div>
                      <button
                        type="button"
                        className="showMore"
                        onClick={(e) => toggleStudentDetails(setShowMore(!showMore))}>
                        {!showMore  ? "show more... ": "show less..."}
                              </button>
               
                       
                     
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
      ) : (
        <section>
          <h3>All Students</h3>

          <h5>
            Total Students: <span className="highlights">{totalStudents}</span>
          </h5>

          <ul>
            {students.map((fellow) => {
              return (
                <li key={fellow.id}>
                  {/* <img src={fellow.profilePhoto} width="90" height="90" />  */}
                  {fellow.certifications.resume &&
                  fellow.certifications.linkedin &&
                  fellow.certifications.github &&
                  fellow.certifications.mockInterview &&
                  fellow.codewars.current.total ? (
                    <p className="onTrack">On Track to Graduate</p>
                  ) : null}
                  <p>{fellow.names.preferredName} {fellow.names.surname}</p>
                  <p>{fellow.username}</p>
                  <p>
                    <span className="highlights">Birthday: </span>
                    {newBirthday(fellow.dob)}
                  </p>

                  <button
                        type="button"
                        className="showMore"
                        onClick={(e) => toggleStudentDetails(setShowMore(!showMore))}>
                        {!showMore  ? "show more... ": "show less..."}
                              </button>
                              {showMore  && <StudentDetails data={data} />}

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
