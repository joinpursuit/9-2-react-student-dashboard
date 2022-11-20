import React from 'react'

function CohortList({ students }) {
    const cohortsCount = {};
    students.forEach(student => {
        cohortsCount[student.cohort.cohortCode] = cohortsCount[student.cohort.cohortCode] + 1 || 1;
    })
    console.log(cohortsCount)

  return (
    <div className='CohortList'>
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li key="all">All Students</li>
        {Object.keys(cohortsCount).map((cohort) => {
            const cohortArr = cohort.split("");
            let i = cohort.indexOf("2");
            cohortArr.splice(i, 0, " ")
            return (
                <li>{cohortArr.join("")}</li>
            )
        })
        }
      </ul>
    </div>
  )
}

export default CohortList