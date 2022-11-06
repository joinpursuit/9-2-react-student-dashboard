import './studentCard.css'
import { useState } from 'react'
import StudentMoreData from './StudentMoreData'


function TrackToGraduateBadge () {
  return (
    <div className='track-to-graduate-badge'>
      <span className='track-to-graduate-badge__icon'>&#127894;</span>
      <h4 className='track-to-graduate-badge__title'>On track to graduate!</h4>
    </div>
  )
}

function StudentCard({ studentData }) {
  const [showingMoreData, setShowingMoreData] = useState(false)

  const { id, profilePhoto, dob, username, names, codewars, cohort, certifications, notes } = studentData
  // studentId ==> alf2001
  
  const trackToGraduate = [
    certifications.resume,
    certifications.linkedin,
    certifications.github,
    certifications.mockInterview,
    codewars.current.total > 600
  ].every(val => Boolean(val))

  //Revisar el guardado en local storage
  const localStorageData = localStorage.getItem(id);
  
  let initialData;

  if(!localStorageData){
    localStorage.setItem(id, JSON.stringify([])) // JSON.stringify => JAVASCRIPT ==> STRING
  } else {
    initialData = JSON.parse(localStorageData) // STRING ==> JAVASCRIPT

    // convierte de string a un arreglo iterable
  }

  // COMENTARIOS
  const [coment, setComent] = useState(initialData) // ['pepito es un loco', 'juan le gusta el perrocaliente']

  const { middleName, preferredName, surname } = names
  const fullName = `${ preferredName } ${ middleName[0] }. ${ surname }`

  const utcDate = new Date(dob).toUTCString()
  const verboseDate = utcDate.split(' ').slice(0, 4).join(' ')

  const toggleMoreData = () => setShowingMoreData(!showingMoreData) ///OPERADOR IMPORTANTE Pasamos como nuevo valor el estado contrario de mi estado actual de tal manera de que el "show more" puede ensenar su contenido y por el otro lado ocultarlo.

  // ESTADOS PARA EL FORMULARIO
  const [formData, setFormData] = useState({
    commenterName: '',
    comment: '',
  })

  const handleSubmit = (handleEvent) => {
    // 1. prevenir el comportamiento por defecto
    handleEvent.preventDefault()

    if (!formData.commenterName.trim() || !formData.comment.trim()) {
      return
    }

    const randomId = Math.floor(Math.random() * 10000)
    
    // 2. Actualizando el listado de comentarios
    const updatedComments = [
      ...coment,
      {
        id: `${id}-${randomId}`,
        commenterName: formData.commenterName,
        comment: formData.comment
      }
    ]

    // 3. Guardemos los valores
    setComent(updatedComments)
    localStorage.setItem(id, JSON.stringify(updatedComments))

    // 4. Limpiar el formulario
    setFormData({
      commenterName: '',
      comment: ''
    })
  }

  // Cuando se cargar el componente preguntar data en local storage
  /* 
    Funcionamiento del local storage

    {
      studentId: [
        comment1,
        comment2,
        comment3
      ]
    }
  */

  return (
      <section className="student-card">
        <div>
          { trackToGraduate ? <TrackToGraduateBadge /> : null }
        </div>
        <div className='student-card__main-content'>
          <div>
            <img src={profilePhoto} alt="student profile photo" className="student-image" />
          </div>
          
          <div className="student-card__content">
            <h6 className="student-card__content-name">{fullName}</h6>
            <p className="student-card__content-email">{username}</p>
            <p className="student-card__content-dob"><span>Birthday</span>: {verboseDate}</p>
          </div>


          {/* Track to graduate badge */}
        </div>




        <button onClick={() => toggleMoreData()} className='toggle-more-info-button'>
          {showingMoreData ? 'Show Less...' : 'Show More...' }
        </button>

        {/* RENDERIZAR CONDICIONALMENTE EL CONTENIDO EXTRA */}
        { showingMoreData ? (
          <div>
            <StudentMoreData codewars={codewars} cohort={cohort} certifications={certifications} />

            <div className='notes-container'>
              <header>
                <h5 className='notes-container__title'>1-to-1 Notes</h5>
              </header>

              <form className="notes-form" onSubmit={(event) => handleSubmit(event)}>
                <div className='form-control'>
                  <label htmlFor='commenter-name'>Commenter Name</label>
                  <input value={formData.commenterName} type='text' id='commenter-name' name='commenterName' onChange={(event) => setFormData(
                    { 
                      ...formData, 
                      commenterName: event.target.value 
                    }
                  )} />
                </div>

                <div className='form-control'>
                  <label htmlFor='comment'>Comment</label>
                  <input value={formData.comment} type='text' id='comment' name='comment' onChange={(event) => setFormData(
                      {
                          ...formData,
                          comment: event.target.value     
                    }
                  ) }  />
                </div>

                <input className='submit-button' type='submit' value='Add note' />
              </form>

              <ul className='notes-list'>
                { coment.map(note => <li key={note.id}>{note.commenterName} says '{note.comment}'</li>) }
              </ul>
            </div>
          </div>
        ) 
        : null 
        }

      </section>
    )
}

// {
//   id: `${id}-${randomId}`,
//   commenterName: formData.commenterName,
//   comment: formData.comment
// }
export default StudentCard