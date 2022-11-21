import React from 'react'
import { useState } from 'react'
import X from "../imgs/x-icon.png"
import Check from "../imgs/check-icon.png"

function onTrackToGraduate(student) {
    const cert = student.certifications
    return (
        cert.resume && cert.linkedin && cert.github && cert.mockInterview && (student.codewars.current.total > 600)
    )
}

function StudentList({ students, cohort, handleHumanReadableCohort }) {
    const [clicked, setClicked] = useState("");
    const [comments, setComments] = useState([]);

    function toggleShowMore(event) {
        console.log(event.target)
    }

    function percentClassName(percent) {
        return percent >= 100 ? "green" : percent >= 50 ? "yellow" : "red";
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value)
        let str = `${e.target.name.value} says, "${e.target.comment.value}"`
        console.log(str)
        setComments([...comments, str])
    }

  return (
    <div className='StudentList'>
        <h2>{cohort.length === students.length ? "All Students" : handleHumanReadableCohort(cohort[0].cohort.cohortCode)}</h2>
        <h3>Total Students: {cohort.length}</h3>
        {cohort.map(student => {
            return (
                <div className='student'>
                    <img src={student.profilePhoto} alt={student.names.preferredName} />
                    <ul>
                        <li key={student.id}>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</li>
                        <li>{student.username}</li>
                        <li>Birthday: {student.dob}</li>
                        <li>{student.cohort.cohortCode}</li>
                        {onTrackToGraduate(student) ? <li>On Track to Graduate</li> : null}
                        <button onClick={() => setClicked(student.id)}>{clicked && student.id === clicked ? "Show Less..." : "Show More..."}</button>
                        {clicked && student.id === clicked ? (
                            <>
                                <h3>Codewars</h3>
                                <li>Current Total: {student.codewars.current.total}</li>
                                <li>Last Week: {student.codewars.current.lastWeek}</li>
                                <li>Goal: {student.codewars.goal.total}</li>
                                <li>Percent of Goal Achieved: <span className={percentClassName(((student.codewars.current.total / student.codewars.goal.total)*100).toFixed())}>{((student.codewars.current.total / student.codewars.goal.total)*100).toFixed()}%</span></li>

                                <h3>Scores</h3>
                                <li>Assignments: {student.cohort.scores.assignments * 100}%</li>
                                <li>Projects: {student.cohort.scores.projects * 100}%</li>
                                <li>Assessments: {student.cohort.scores.assessments * 100}%</li>

                                <h3>Certifications</h3>
                                <li>Resume: {student.certifications.resume ? <img src={Check} className="icon" /> : <img src={X} className="icon" />}</li>
                                <li>LinkedIn: {student.certifications.linkedin ? <img src={Check} className="icon" /> : <img src={X} className="icon" />}</li>
                                <li>GitHub: {student.certifications.github ? <img src={Check} className="icon" /> : <img src={X} className="icon" />}</li>
                                <li>Mock Interview: {student.certifications.mockInterview ? <img src={Check} className="icon" /> : <img src={X} className="icon" />}</li>
                            </>
                            
                        ) : null}
                    </ul>
                    <div className='notes'>
                        <h3>1-on-1 Notes</h3>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <label htmlFor="name">Commenter Name</label>
                            <input type="text" name="name" id="name" />
                            <label htmlFor="comment">Comment</label>
                            <input type="text" name="comment" id="comment" />
                            <input type="submit" />
                        </form>

                        {comments.length > 0 ? (
                            <ul>
                            {comments.map(comment => {
                            return (
                                <li>{comment}</li>
                            )
                        })}
                        </ul>): null }

                    </div>

                    
                </div>
            )
        })}
    </div>
  )
}

export default StudentList
