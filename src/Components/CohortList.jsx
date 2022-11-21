import React from 'react'
import Student from './Student';

function CohortList({ students, handleCohortSelect, handleHumanReadableCohort, setCohort }) {
    const cohortsCount = {};
    students.forEach(student => {
        cohortsCount[student.cohort.cohortCode] = cohortsCount[student.cohort.cohortCode] + 1 || 1;
    })

  return (
    <div className='CohortList'>
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li key="all" className='AllStudents' onClick={() => setCohort(students)}>All Students</li>
        {Object.keys(cohortsCount).map((cohortCode) => {
            return (
                <li key={Math.random()} onClick={() => handleCohortSelect(cohortCode)}>{handleHumanReadableCohort(cohortCode)}</li>
            )
        })
        }
      </ul>
    </div>
  )
}

export default CohortList