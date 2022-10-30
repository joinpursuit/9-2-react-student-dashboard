import style from "./Student.module.css";

function Stats(props) {
  const percent =
    (props.codewars.current.total / props.codewars.goal.total) * 100;

  const getColor = () => {
    if (percent >= 100) return "green";
    if (percent >= 50) return "yellow";
    return "red";
  };

  return (
    <section className={[style.stats, props.show && style.show].join(" ")}>
      <div>
        <h3>Codewars:</h3>
        <ul>
          <li>
            <span className="cyan">Current Total:</span>{" "}
            {props.codewars.current.total}
          </li>
          <li>
            <span className="cyan">Last Week:</span>{" "}
            {props.codewars.current.lastWeek}
          </li>
          <li>
            <span className="cyan">Goal</span> {props.codewars.goal.total}
          </li>
          <li>
            <span className="cyan">Percent of Goal Achieved:</span>{" "}
            <span style={{ color: getColor() }}>{+percent.toFixed(2)}%</span>
          </li>
        </ul>
      </div>
      <div>
        <h3>Scores</h3>
        <ul>
          <li>
            <span className="cyan">Assignments:</span>{" "}
            {props.cohort.scores.assignments * 100}%
          </li>
          <li>
            <span className="cyan">Projects:</span>{" "}
            {props.cohort.scores.projects * 100}%
          </li>
          <li>
            <span className="cyan">Assessments:</span>{" "}
            {props.cohort.scores.assessments * 100}%
          </li>
        </ul>
      </div>
      <div>
        <h3>Certificates</h3>
        <ul>
          <li>
            <span className="cyan">Resume</span>{" "}
            {props.certifications.resume ? "✅" : "❌"}
          </li>
          <li>
            <span className="cyan">Linkedin</span>{" "}
            {props.certifications.linkedin ? "✅" : "❌"}
          </li>
          <li>
            <span className="cyan">Mock Interview</span>{" "}
            {props.certifications.mockInterview ? "✅" : "❌"}
          </li>
          <li>
            <span className="cyan">Github</span>{" "}
            {props.certifications.github ? "✅" : "❌"}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Stats;
