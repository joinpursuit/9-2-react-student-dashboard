// StudentsList
// Este componente va a permitir listar el conjunto de estudiantes que queramos
import './studentsList.css'
import StudentCard from './StudentCard'

function StudentsList({ wrapCohort, cohortOf }) {

  return (
    <section>
      <header>
        <h1 className='students-list__title'>{cohortOf}</h1>
        <p>Total Students: {wrapCohort.length}</p>
      </header>
      
      
      <div className="students-list">
        {wrapCohort.map((student) => {
          return <StudentCard key={student.id} studentData={student} />
        })}
      </div>

      
    </section>
  )
}

export default StudentsList
