import React from 'react'

function onTrackToGraduate(student) {
    const cert = student.certifications
    return (
        cert.resume && cert.linkedin && cert.github && cert.mockInterview && (student.codewars.current.total > 600)
    )
}

function StudentList({ students, cohort, handleHumanReadableCohort }) {
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
                    </ul>
                </div>
            )
        })}
    </div>
  )
}

export default StudentList
