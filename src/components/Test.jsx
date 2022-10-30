
import Students from '../data/data.json';
import {useState} from 'react';


export default function Test(){
    const [currStudent, setStudent] = useState(null);
    const [currSemester, setSemester] = useState('All Students');
    const [currNotes, setNotes] = useState([]);
    const [toggle, setToggle] = useState(false);
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
        // console.log(student)
        // setNotes([...currNotes, {notes: student.notes, id: student.id}]);
        
    function assignments(student){
        const {scores} = student;
        return { assignments: "Assignments: "+ scores.assignments * 100 +'%', projects: "Projects: "+ scores.projects * 100+'%', assessments: "Assessments: "+ scores.assessments * 100+'%' }
    }

    function certifications(student){
        const {linkedin, resume, github, mockInterview} = student;
        return (<>
            <li><strong>LinkedIn:</strong> {linkedin? "✅" : "❌"}</li>
            <li><strong>Resume:</strong> {resume? "✅" : "❌"}</li>
            <li><strong>Github: </strong>{github? "✅" : "❌"}</li>
            <li><strong>Mock Interview: </strong>{mockInterview? "✅" : "❌"}</li>
            </>
        )
    }

    function codewars(codewars){
        const {current} =  codewars;
        const {goal} = codewars;
        let total = ((current.total /goal.total) * 100).toFixed(2);
        let color = ''
        if (total < 50){
            color = 'red';
        } else if ((total >= 50) &&  (total < 100)){
            color = 'yellow';
        } else {
            color = 'green';
        }

        return {color: color, totalpoints: "Current Total: " + current.total, lastWeekTotal: "Last Week Total: "  + current.lastWeek, goal: "Goal: " + goal.total,total:  total +"%", lastWeek: "Total Reached: " +(current.lastWeek /goal.lastWeek) * 100 +"%"}
    }


        function graduate(student){
            const results = [student.certifications.resume, student.certifications.linkedin, student.certifications.github, student.certifications.mockInterview];
            if (results.every(result => (result === true) && student.codewars.current.total > 600)){
                return { Graduate: "Ready to Graduate!", ready: 'ready'}
            } else {
                return {Graduate: "More work needed.", ready: 'notready'} 
            }
        }


            function handleSubmit(event, student) {
                event.preventDefault();
            
                
        }

            function addNotes(note){
                setNotes([...currNotes, note]);
            }

        function notes(student){
            const {notes} = student;
            if (notes.length > 0) {
                return (<ul> {notes.map(note => <li><strong>{note.commenter}: </strong>{note.comment}</li>)}</ul>)
            }
                else{
                    return <div>No notes found.</div>
                }
            }

        return (
        <div className='student' key={student.id}>
            <div className='photo'><img src={student.profilePhoto} alt={student.id} /></div>
            <div className="title"><span>{student.names.preferredName} {student.names.middleName.charAt(0)}. {student.names.surname}</span></div>
            <div className={graduate(student).ready}> <span>{graduate(student).Graduate}</span></div>
            <div><span className="textpadding"><strong>Birthday:</strong> {new Date(student.dob).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})}</span></div>
            <div><span className="textpadding"><strong>Username: </strong>{student.username} </span><button className='expanddong' onClick={() => {setStudent({...student}); addNotes({id: student.id, notes: student.notes}); setToggle(!toggle); console.log(currStudent)}}> {toggle && currStudent && (currStudent.id === student.id) ? '-' : '+'} </button></div>
            
            {toggle && currStudent && (currStudent.id === student.id) ? 
            <>
                <div className='statistics'>
                    <div>
                        <div><h3>Codewars</h3></div>
                        <div>{codewars(student.codewars).totalpoints}</div>
                        <div>{codewars(student.codewars).lastWeekTotal}</div>
                        <div>{codewars(student.codewars).goal}</div>
                        <div>Total Reached: <span className={codewars(student.codewars).color}>{codewars(student.codewars).total}</span></div>
                    </div>
                    <div>
                        <div><h3>Assignments</h3></div>
                        <div>{assignments(student.cohort).assignments}</div>
                        <div>{assignments(student.cohort).projects}</div>
                        <div>{assignments(student.cohort).assessments}</div>
                    </div>
                    <div>
                    <div><h3>Certifications</h3></div>
                        <ul>{certifications(student.certifications)}</ul>
                    </div>
                </div>

                <div>
                    <div className='center'><form onSubmit={handleSubmit}>
                        
                        <label htmlFor='name'>Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={(event) => setName(event.target.value)}
                        /> <br></br>
                        <label htmlFor='comment'>Comment</label>
                        <input id="comment" name="comment"
                            type="text"
                            onChange={(event) => setComment(event.target.value)}
                        /><br></br>
                        <button type="submit">Submit</button>
                        </form>
                     </div>
                    <div>{notes(student)}</div>
                </div>
            </>
            : null}

        </div>
        )})

        
  
    return ( 
    <><div className='left'><div><h2>{currSemester.match(/[a-z]+|[^a-z]+/gi).join(' ')}</h2></div>
    <div><h4>Total Students: {currStudentlist.length}</h4></div>
    <select onChange={(event) => { console.log(event.target.value); setSemester(event.target.value)}}> {list3} </select></div>
    <div>{studentCards}</div>
    </>)
        }