import React from 'react'
import { useState } from 'react'

function onTrackToGraduate(student) {
    const cert = student.certifications
    return (
        cert.resume && cert.linkedin && cert.github && cert.mockInterview && (student.codewars.current.total > 600)
    )
}

function StudentList({ students, cohort, handleHumanReadableCohort }) {
    const [clicked, setClicked] = useState("");

    function toggleShowMore(event) {
        console.log(event.target)
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
                                <li>Percent of Goal Achieved: {((student.codewars.current.total / student.codewars.goal.total)*100).toFixed()}%</li>

                                <h3>Scores</h3>
                                <li>Assignments: {student.cohort.scores.assignments * 100}%</li>
                                <li>Projects: {student.cohort.scores.projects * 100}%</li>
                                <li>Assessments: {student.cohort.scores.assessments * 100}%</li>

                                <h3>Certifications</h3>
                                <li>Resume: {student.certifications.resume ? "YES" : "NO"}</li>
                                <li>LinkedIn: {student.certifications.linkedin ? "YES" : "NO"}</li>
                                <li>GitHub: {student.certifications.github ? "YES" : "NO"}</li>
                                <li>Mock Interview: {student.certifications.mockInterview ? "YES" : "NO"}</li>
                            </>
                            
                        ) : null}
                    </ul>
                    
                </div>
            )
        })}
    </div>
  )
}

export default StudentList
