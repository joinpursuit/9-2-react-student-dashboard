import { useState } from "react";
import AddNotes from "./Notes";

function StudentDetails({
  cohort,
  codewars,
  certifications,
  notes,
  showDetails,
  id,
  addNoteToStudent,
}) {
  //this component handles the student details for each student including the notes, therefore the state for the notes is set here. the default state for the notes comes from the notes data
  const [noteLi] = useState(notes);

  let codewarsPercentage = (
    (codewars.current.total / codewars.goal.total) *
    100
  ).toFixed(0);

  //when the showDetails state is true, information about the student is shown, otherwise no information is shown
  return showDetails ? (
    <div className="student-container">
      <div className="top-details">
        <section>
          <h4 className="codewars">💻&nbsp;Codewars:&nbsp;💻</h4>
          <p>Current Total:&nbsp;{codewars.current.total}</p>
          <p>Last Week:&nbsp;{codewars.current.lastWeek}</p>
          <p>Goal:&nbsp;{codewars.goal.total}</p>
          <p>
            Percent of Goal Achieved:&nbsp;
            <span
              className={
                codewarsPercentage >= 100
                  ? "green"
                  : codewarsPercentage > 50
                  ? "yellow"
                  : "red"
              }
            >
              {codewarsPercentage}%
            </span>
          </p>
        </section>
        <section>
          <h4 className="scores">📓&nbsp;Scores:&nbsp;📓</h4>
          <p>Assigments:&nbsp;{cohort.scores.assignments * 100}%</p>
          <p>Projects:&nbsp;{cohort.scores.projects * 100}%</p>
          <p>Assessments:&nbsp;{cohort.scores.assessments * 100}%</p>
        </section>
        <section>
          <h4 className="certifications">🏆&nbsp;Certifications:&nbsp;🏆</h4>
          <p>Resume:&nbsp;{certifications.resume ? "✅" : "❌"}</p>
          <p>Linkedin:&nbsp;{certifications.linkedin ? "✅" : "❌"}</p>
          <p>
            Mock Interview:&nbsp;{certifications.mockInterview ? "✅" : "❌"}
          </p>
          <p>GitHub:&nbsp;{certifications.github ? "✅" : "❌"}</p>
        </section>
      </div>
      <AddNotes
        addNoteToStudent={addNoteToStudent}
        id={id}
        notes={notes}
        noteLi={noteLi}
      />
    </div>
  ) : (
    ""
  );
}

export default StudentDetails;
