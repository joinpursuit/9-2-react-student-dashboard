import React from 'react'
import { useState } from 'react';
import X from "../imgs/x-icon.png"
import Check from "../imgs/check-icon.png"

export default function Student({ student }) {

  const [clicked, setClicked] = useState(false);
  const [comments, setComments] = useState(student.notes);
  const [comment, setComment] = useState({
    commenter: "",
    comment: "",
  })

  function onTrackToGraduate(student) {
    const cert = student.certifications
    return (
        cert.resume && cert.linkedin && cert.github && cert.mockInterview && (student.codewars.current.total > 600)
    )
}
function toggleShowMore(event) {
  setClicked(!clicked);
}

function percentClassName(percent) {
  return percent >= 100 ? "green" : percent >= 50 ? "yellow" : "red";
}

function handleSubmit(e) {
  e.preventDefault();
  // console.log(e.target.name.value)
  // let str = `${e.target.name.value} says, "${e.target.comment.value}"`
  // console.log(str)
  setComments([...comments, comment])
  setComment({
    commenter: "",
    comment: "",
  })
}

function handleChange(e) {
  const commentCopy = {...comment, [e.target.id]: e.target.value}
  setComment(commentCopy);
}


  return (
    <div className='student'>
                    <img src={student.profilePhoto} alt={student.names.preferredName} />
                    <ul>
                        <li key={student.id}>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</li>
                        <li>{student.username}</li>
                        <li>Birthday: {student.dob}</li>
                        <li>{student.cohort.cohortCode}</li>
                        {onTrackToGraduate(student) ? <li>On Track to Graduate</li> : null}
                        <button onClick={toggleShowMore}>{clicked ? "Show Less..." : "Show More..."}</button>
                        {clicked ? (
                            <>
                                <h3>Codewars</h3>
                                <li>Current Total: {student.codewars.current.total}</li>
                                <li>Last Week: {student.codewars.current.lastWeek}</li>
                                <li>Goal: {student.codewars.goal.total}</li>
                                <li>Percent of Goal Achieved: <span className={percentClassName(((student.codewars.current.total / student.codewars.goal.total)*100).toFixed())}>{((student.codewars.current.total / student.codewars.goal.total)*100).toFixed()}%</span></li>

                                <h3>Scores</h3>
                                <li>Assignments: {student.cohort.scores.assignments * 100}%</li>
                                <li>Projects: {student.cohort.scores.projects * 100}%</li>
                                <li>Assessments: {student.cohort.scores.assessments * 100}%</li>

                                <h3>Certifications</h3>
                                <li>Resume: {student.certifications.resume ? <img src={Check} className="icon" /> : <img src={X} className="icon" />}</li>
                                <li>LinkedIn: {student.certifications.linkedin ? <img src={Check} className="icon" /> : <img src={X} className="icon" />}</li>
                                <li>GitHub: {student.certifications.github ? <img src={Check} className="icon" /> : <img src={X} className="icon" />}</li>
                                <li>Mock Interview: {student.certifications.mockInterview ? <img src={Check} className="icon" /> : <img src={X} className="icon" />}</li>
                                <div className='notes'>
                        <h3>1-on-1 Notes</h3>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <label htmlFor="name">Commenter Name</label>
                            <input type="text" name="name" id="commenter" value={comment.commenter} onChange={handleChange} />
                            <label htmlFor="comment">Comment</label>
                            <input type="text" name="comment" id="comment" value={comment.comment} onChange={handleChange} />
                            <input type="submit" />
                        </form>

                        {comments.length > 0 ? (
                            <ul>
                            {comments.map((comment, i) => {
                            return (
                                <li key={`${comment.comment}-${i}`} >{`${comment.commenter} says, "${comment.comment}"`}</li>
                            )
                        })}
                        </ul>): null }

                    </div>
                            </>
                            
                        ) : null}
                    </ul>
                    

                    
                </div>
  )
}
