import Codewars from './Codewars'
import Assignments from './Assignments'
import Certifications from './Certifications'
import Forms from './Forms'

import {useState} from 'react'

export default function Statistics ({addNotes, currNotes, currStudent, setStudent, notes,  setComment, handleSubmit, student, setName}){
    const [toggle, setToggle] = useState(false);
    const {certifications, codewars, cohort} = student;
 
   return (<>
   <button className='expanddong right' onClick={() => {setStudent({...student}); addNotes([student.id], student.notes); setToggle(!toggle); console.log(currNotes)}}> {toggle && currStudent && (currStudent.id === student.id) ? <strong>-</strong> : <strong>+</strong>} </button>
   {toggle ? 
   <>
        <div className='statistics'>
            <Codewars codewars={codewars} />
            <Assignments cohort={cohort} />
            <Certifications certifications={certifications} />
        </div>
        <Forms notes={notes} setComment={setComment} handleSubmit={handleSubmit} student={student} setName={setName}/>
    </>
    : null}

</>)}