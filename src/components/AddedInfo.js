import React, { useState } from 'react'

export default function AddedInfo({studentNotes, updatedNotesForStudent, studentID}) {

const [comment, setComment] = useState("")
const [commenter, setCommenter] = useState("")

function submitForm(e){
e.preventDefault()
updatedNotesForStudent(studentID, commenter, comment)
}

  return (
    <>
    <div>
        1-on-1 Notes
    </div>
<form onSubmit={submitForm}>
    <label for="commenter-name">
        Commenter Name
    </label>
    <input name="commenter-name" id="commenter-name" value={commenter} onChange={(e) => setCommenter(e.target.value) }/>
    <label for="comment">
        Comment
    </label>
    <input name="comment" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
    <input type="submit"/>
</form>
<ul>
{studentNotes.map((notes) => {
    return <li>
        {notes.commenter}: {notes.comment}
    </li>
})}
</ul>
    </>
  )
}
