import { useState } from "react";
import Form from "./Form";
export default function StudentDetails({ fellow }) {
  const [showMore, setShowMore] = useState(false);
  const [form, setForm] = useState(false)
//   const toggleStudentDetails = (e) => {
//     e.preventDefault();
//   };


//   const submitComment = (e) => {
//     e.preventDefault();
//     setForm(!form)

//   }

  return (
    <div>
      <button
        type="button"
        className="showMore"
        onClick={(e) => setShowMore(!showMore)}
      >
        {/** text inside button*/}
        {!showMore ? "show more... " : "show less..."}
      </button>
      {showMore ? (
        <div className="studentDetails">
          <ul>
            <li key={fellow.id} className="studentList">
              <h3>codewars: </h3>
              <p>{fellow.codewars.current.total}</p>
              <p>{fellow.codewars.current.lastWeek}</p>
              <p>{fellow.codewars.goal.total}</p>
              <p>Percent of Goal Achieved:{(fellow.codewars.current.total / fellow.codewars.goal.total).toFixed(2) *100}%
         </p>
              <h3>Scores</h3>
              <p>Assignments: {fellow.cohort.scores.assignments * 100}%</p>
              <p>Projects: {fellow.cohort.scores.projects * 100}%</p>
              <p>Assesments:{fellow.cohort.scores.assessments * 100}%</p>
              <h3>certifications</h3>
              <p>Resume: {fellow.certifications.resume ? "✅ " : "❌"}</p>
              <p>Linkedin: {fellow.certifications.linkedin ? "✅ " : "❌"} </p>
              <p>
                mockInterview:
                {fellow.certifications.mockInterview ? "✅ " : "❌"}{" "}
              </p>
              <p>Github: {fellow.certifications.github ? "✅ " : "❌"} </p>
            </li>
          </ul>
            <Form  fellow={fellow}/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
