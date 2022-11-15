import { useState } from "react"

export default function OneOnOne({setNotes,notes}){
    const [form, setForm]=useState({commenter:"",comment:""})
    
    function submitForm(e){
        e.preventDefault()
        setNotes([...notes,form])
        console.log(form)
    
    }
    function handleChange(e){
       debugger
        setForm({...form,[e.target.id]: [e.target.value]})
    }
    return (
        <div>
            <h3 className="notes-box">1-on-1 Notes</h3>
            <form className="one-on-one" onSubmit={submitForm}>
               <label for="commenter">Commenter Name:
               <input type="text" value={form.commenter} id="commenter"  onChange={handleChange}/></label>
               <label for="comment">Comment:
               <input type="text" value={form.comment} id="comment" onChange={handleChange}/></label>
               <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>
    )
}