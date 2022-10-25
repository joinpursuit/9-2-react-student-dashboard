import { useState } from "react";
import AddNotes from "./Notes";

function StudentDetails({
  cohort,
  codewars,
  certifications,
  notes,
  showDetails,
}) {
  const [noteLi, setNoteLi] = useState(notes);

  return showDetails ? (
    <div className="student-container">
      <div className="top-details">
        <section>
          <h4>Codewars:</h4>
          <p>Current Total: {codewars.current.total}</p>
          <p>Last Week: {codewars.current.lastWeek}</p>
          <p>Goal: {codewars.goal.total}</p>
          <p>
            Percent of Goal Achieved:{" "}
            <span
              className={
                ((codewars.current.total / codewars.goal.total) * 100).toFixed(
                  0
                ) >= 100
                  ? "green"
                  : (
                      (codewars.current.total / codewars.goal.total) *
                      100
                    ).toFixed(0) > 50 &&
                    (
                      (codewars.current.total / codewars.goal.total) *
                      100
                    ).toFixed(0) < 100
                  ? "yellow"
                  : "red"
              }
            >
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
              %
            </span>
          </p>
        </section>
        <section>
          <h4>Scores:</h4>
          <p>Assigments: {cohort.scores.assignments * 100}%</p>
          <p>Projects: {cohort.scores.projects * 100}%</p>
          <p>Assessments: {cohort.scores.assessments * 100}%</p>
        </section>
        <section>
          <h4>Certifications:</h4>
          <p>Resume: {certifications.resume ? "✅" : "❌"}</p>
          <p>Linkedin: {certifications.linkedin ? "✅" : "❌"}</p>
          <p>Mock Interview: {certifications.mockInterview ? "✅" : "❌"}</p>
          <p>GitHub: {certifications.github ? "✅" : "❌"}</p>
        </section>
      </div>
      <AddNotes notes={notes} noteLi={noteLi} setNoteLi={setNoteLi} />
    </div>
  ) : (
    ""
  );
}

export default StudentDetails;
