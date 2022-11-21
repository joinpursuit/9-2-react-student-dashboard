import React from 'react'
import { useState } from 'react'
// import X from "../imgs/x-icon.png"
// import Check from "../imgs/check-icon.png"
import Student from './Student'



function StudentList({ students, cohort, handleHumanReadableCohort }) {
    
    


    
  return (
    <div className='StudentList'>
        <h2>{cohort.length === students.length ? "All Students" : handleHumanReadableCohort(cohort[0].cohort.cohortCode)}</h2>
        <h3>Total Students: {cohort.length}</h3>
        {cohort.map(student => {
            return (
                <Student key={`${student.id}`}
                student={student}

                 />
            )
        })}
    </div>
  )
}

export default StudentList
