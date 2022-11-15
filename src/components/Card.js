import { useState } from "react"
import MoreDetails from "./MoreDetails"
import OneOnOne from "./OneOnOne"

export default function CreateCard({student}){
    const [details,setDetails]=useState("Show More")
    // const [notes,setNotes]=useState(student.notes)

    
    function toggleDetails(){
        if (details==="Show More"){
            setDetails("Show Less")
        }
        else{
            setDetails("Show More")
        }

    }
    let status
    if (student.certifications.resume&&student.certifications.linkedin&&student.certifications.github&&student.certifications.mockInterview){
        status="On Track to Graduate"
    }
    
    const fullName=student.names.preferredName+" " + student.names.middleName[0] + " "+ student.names.surname
    const personUsername=student.username
    const birthday=student.dob

    const birthmonths=["none","January","February","March","April","May","June","July","August","September","October","November","December"]
  
    birthday.split("/")
   const month=birthmonths[birthday[0]]
  
   const date= birthday.split("/")[1]
   
   const byear= birthday.split("/")[2]
   
    return (
        <div className="card">
        <img src={student.profilePhoto} className="image"/>
        <div className="profile-info">
        <p>{fullName}</p>
        <p>{personUsername}</p>
        <p><span className="birthday">Birthday: </span>{month + " " +date + "," + " "+byear }</p>
        
       
        <button className="show-more" onClick={()=>setDetails(toggleDetails)}>{details}</button></div>
        {details==="Show Less" ? <MoreDetails student={student}/>: null}
        <p className="status-p">{status}</p>
        </div>

    )
}