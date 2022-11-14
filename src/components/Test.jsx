
import Students from '../data/data.json';

import Statistics from './Statistics';

import {useState} from 'react';

export default function Test(){
    const [currStudent, setStudent] = useState(null);
    const [currSemester, setSemester] = useState('All Students');
    const [currNotes, setNotes] = useState({});
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');



    let years = new Set(["1"]);
    Students.forEach(student => years.add(student.cohort.cohortCode));
    let list = [];
    years.forEach(year => {
        list.push(year)
    })
  let list2 = list.sort((a, b) => {return a.localeCompare(b, undefined, {
    numeric: false,
    sensitivity: 'base'
})})
 let list2025 = list2.filter(item =>item.includes('2025'));
 let list2026 = list2.filter(item => item.includes('2026'));
 let list4 = list2026.concat(list2025);
 list4.unshift("All Students");
    let list3 = list4.map(item =>{ 
    return <option value={item} key={item}> {item.match(/[a-z]+|[^a-z]+/gi).join(' ')} </option>});


    const currStudentlist = Students.filter(student => currSemester === "All Students" ? student: student.cohort.cohortCode === currSemester);
   
    const studentCards = currStudentlist.map(student => {

        function graduate(student){
            const results = [student.certifications.resume, student.certifications.linkedin, student.certifications.github, student.certifications.mockInterview];
            if (results.every(result => (result === true) && student.codewars.current.total > 600)){
                return { Graduate: "On track to Graduate!", ready: 'ready'}
            } else {
                return {Graduate: "More work needed.", ready: 'notready'} 
            }
        }


            function handleSubmit(event) {
                event.preventDefault();
                let tmp = currNotes
                if (name && comment) tmp[currStudent.id].push({commenter: name, comment: comment})
            setNotes({...tmp})
                
        }

            function addNotes(student, note){
                
                setNotes({...currNotes, [student]: note});
            
        }

        function notes(student){
            const {notes} = student;
            if (notes.length > 0) {
                return (<ul> {notes.map(note => <li><strong>{note.commenter}: </strong>{note.comment}</li>)}</ul>)
            }
                else{
                    return <ul><li>No notes found.</li></ul>
                }
            }

        return (
        <div className='student' key={student.id}>
            <div className='photo'><img src={student.profilePhoto} alt={student.id} /></div>
            <div className="title"><em><span>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</span></em></div>
            <div className={graduate(student).ready}> <em><span>{graduate(student).Graduate}</span></em></div>
            <div><span className="textpadding"><strong>Birthday:</strong> {new Date(student.dob).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})}</span></div>
            <div><span className="textpadding"><strong>Username: </strong>{student.username} </span></div>
            <Statistics addNotes={addNotes} currNotes={currNotes} currStudent={currStudent} setStudent={setStudent} student={student} codewars={student.codewars} cohort={student.cohort} certifications={student.certifications} notes={notes} setComment={setComment} handleSubmit={handleSubmit} setName={setName}/>
        </div>
        )})

        
  
    return ( 
    <>
    <div className='left'>
        <div>
            <h2>{currSemester.match(/[a-z]+|[^a-z]+/gi).join(' ')}</h2>
        </div>
    <div>
        <h4>Total Students: {currStudentlist.length}</h4>
        </div>
    <select onChange={(event) => { console.log(event.target.value); setSemester(event.target.value)}}> {list3} </select></div>
    <div>{studentCards}</div>
    </>)
        }