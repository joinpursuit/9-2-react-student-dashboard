import React from 'react'

function StudentList({ students }) {
  return (
    <div className='StudentList'>
        <h2>All Students</h2>
        <h3>Total Students: {students.length}</h3>
        {students.map(student => {
            return (
                <div className='student'>
                    <img src={student.profilePhoto} alt={student.names.preferredName} />
                    <ul>
                        <li>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</li>
                        <li>{student.username}</li>
                    </ul>
                </div>
            )
        })}
    </div>
  )
}

export default StudentList
