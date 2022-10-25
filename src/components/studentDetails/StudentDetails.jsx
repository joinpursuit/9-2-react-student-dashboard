import "./StudentDetails.css";
export default function studentDetails({ student }) {
  const { codewars, certifications, cohort } = student;
  const codewarsPercent = (
    (codewars.current.total / codewars.goal.total) *
    100
  ).toFixed();
  const colorToApply =
    codewarsPercent >= 100 ? "green" : codewarsPercent > 50 ? "yellow" : "red";
  return (
    <div className="student-details">
      <div className="codewars">
        <p>Codewars</p>
        <p>Current Total: {" " + codewars.current.total} </p>
        <p>Last Week: {" " + codewars.current.lastWeek}</p>
        <p>Goal:{" " + codewars.goal.total} </p>
        <p>
          Percent of Goal Achieved: &nbsp;
          <span className={colorToApply}> {codewarsPercent}%</span>
        </p>
      </div>
      <div className="scores">
        <p>Scores</p>
        <p>Assignments:{" " + cohort.scores.assignments * 100}%</p>
        <p>Projects:{" " + cohort.scores.projects * 100}% </p>
        <p>Assessments:{" " + cohort.scores.assessments * 100}% </p>
      </div>
      <div className="certifications">
        <p>Certifications</p>
        <p>Resume: &nbsp; {certifications.resume ? "✅" : "❌"}</p>
        <p>LinkedIn: &nbsp;{certifications.linkedin ? "✅" : "❌"} </p>
        <p>
          Mock Interview:&nbsp; {certifications.mockInterview ? "✅" : "❌"}
        </p>
        <p>Github: &nbsp;{certifications.github ? "✅" : "❌"} </p>
      </div>
    </div>
  );
}
