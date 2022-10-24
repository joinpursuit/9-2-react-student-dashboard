function HandleStudentDetails({cohort, codewars, certifications, notes}) {
    return (
        <div className="student-container">
            <div className="top-details">
            <section>
                <h4>Codewars:</h4>
                <p>Current Total: {codewars.current.total}</p>
                <p>Last Week: {codewars.current.lastWeek}</p>
                <p>Goal: {codewars.goal.total}</p>
                <p>Percent of Goal Achieved: <span className={(codewars.current.total/codewars.goal.total * 100).toFixed(0) >= 100 ? "green" : (codewars.current.total/codewars.goal.total * 100).toFixed(0) > 50 && (codewars.current.total/codewars.goal.total * 100).toFixed(0) < 100 ? "yellow" : "red" }>&nbsp;{(codewars.current.total/codewars.goal.total * 100).toFixed(0)}%</span></p>
            </section>
            <section>
                <h4>Scores:</h4>
                <p>Assigments: {cohort.scores.assignments * 100}%</p>
                <p>Projects: {cohort.scores.projects * 100}%</p>
                <p>Assessments: {cohort.scores.assessments * 100}%</p>
            </section>
            <section>
                <h4>Certifications:</h4>
                <p>Resume: {certifications.resume ? "✅" : "❌" }</p>
                <p>Linkedin: {certifications.linkedin ? "✅" : "❌" }</p>
                <p>Mock Interview: {certifications.mockInterview ? "✅" : "❌" }</p>
                <p>GitHub: {certifications.github ? "✅" : "❌" }</p>
                </section>
                </div>
           
            <section>
                <h4>1-on-1 Notes</h4>
                <form>
                    <label>Commenter Name </label>
                    <input></input>
                    <br />
                    <br/>
                    <label>Comment </label>
                    <input></input>
                    <br />
                    <br/>
                    <button className="note-button">Add Note</button>
                </form>
                <ul>
                    {notes.length ? <li>{notes[0].commenter} says, "{notes[0].comment}"</li> : ""}
                </ul>
            </section>
        </div>
    )
}

export default HandleStudentDetails