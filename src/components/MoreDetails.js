import { useState } from "react"
import OneOnOne from "./OneOnOne"

export default function MoreDetails({student}){

    const [notes,setNotes]=useState(student.notes)
    let resumeIcon="✅"
    let linkedInIcon="✅"
    let gitHubIcon="✅"
    let mockIcon="✅"
    if (student.certifications.resume===false){
        resumeIcon="❌"
    }
    if (student.certifications.linkedin===false){
        linkedInIcon="❌"
    }

    if (student.certifications.github===false){
        gitHubIcon="❌"
    }
    if (student.certifications.mockInterview===false){
        mockIcon="❌"
    }

let goalPercantage=((student.codewars.current.total /student.codewars.goal.total)*100)
let color='red'

if (goalPercantage>=100){
    color="green";
}

if (goalPercantage>= 50&&goalPercantage<100){
    color="yellow"
}
console.log(color)

let gpDisplay=<span style={{color}}>{goalPercantage.toFixed(2)}%</span>
    return (
        <div className="more-details">
            <div>
                <h3>CodeWars</h3>
                <p><span className="green">Current Total:</span>{student.codewars.current.total}</p>
                <p><span className="green">Last Week:</span>{student.codewars.current.lastWeek}</p>
                <p><span className="green">Goal:</span>{student.codewars.goal.total}</p>
                <p><span className="green">Percentage of Goal Achieved:</span> {gpDisplay}</p>
            </div>
            <div>
                <h3>Scores</h3>
                <p><span className="green">Assignments:</span> {student.cohort.scores.assignments*100 +"%"}</p>
                <p><span className="green">Projects: </span>{student.cohort.scores.projects*100 +"%"}</p>
                <p><span className="green">Assessments:</span> {student.cohort.scores.assessments*100 +"%"}</p>

            </div>
            <div>
                <h3>Certifications</h3>
                <p><span className="green">Resume:</span>{resumeIcon}</p>
                <p><span className="green">Linkedin:</span>{linkedInIcon}</p>
                <p><span className="green">GitHub:</span>{gitHubIcon}</p>
                <p><span className="green">Mock Interview:</span> {mockIcon}</p>
            </div>
            <section className="notes">
                < OneOnOne setNotes={setNotes} notes={notes}/>
                <h3>Comments</h3>
            {notes.map(note=>
                (
            <div>
                
                <ul>
                    <li>{note.commenter}: {note.comment}</li>
                </ul>
            </div>
        ))}
        </section>
        </div>
    )
}