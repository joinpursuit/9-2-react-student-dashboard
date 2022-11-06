import './studentMoreData.css'

function Icon ({ boolean }) {
  return boolean ? <span>&#9989;</span> : <span>&#10060;</span>
}

function selectColor(percentage) {
  if (percentage < 50) return 'red'
  if (percentage >= 50 && percentage < 100) return 'orange'
  if (percentage >= 100) return 'rgb(110, 145, 110)'
}

function StudentMoreData({ codewars, cohort, certifications }) {
    const codewarsPercentage = Math.floor((codewars.current.total * 100) / codewars.goal.total)

    return (
      <div className="student-more-data">
       {/* Goal data */}
        <div>
          <h4>Codewars</h4>

          <ul>
            <li>Current: { codewars.current.total }</li>
            <li>Last week: { codewars.current.lastWeek }</li>
            <li>Goal: { codewars.goal.total }</li>
            <li>Percent of Goal Achieved: 
              <span style={{ color: selectColor(codewarsPercentage)}}>{ codewarsPercentage }%</span>
            </li>
          </ul>
        </div>

        {/* Scores data */}
        <div>
          <h4>Scores</h4>

          <ul>
                    <li>Assignments: { cohort.scores.assignments *100 } %</li>
                    <li>Projects: { cohort.scores.projects *100} %</li>
                    <li>Assesstments:{ cohort.scores.assessments *100} %</li>
          </ul>

        </div>

        {/* Certifications data */}
        <div>
          <h4>Certifications</h4>

          <ul>
              <li>Resume:{certifications.resume ? <span>&#9989;</span> : <span>&#10060;</span>} </li>
              <li>Linkedin: {certifications.linkedin ? <span>&#9989;</span> : <span>&#10060;</span>}  </li>
              <li>Mock interview: { <Icon boolean={certifications.mockInterview} /> } </li>
              <li>GitHub:{ <Icon boolean={certifications.github} /> } </li>
          </ul>               

        </div>
      </div>
  )
}

export default StudentMoreData