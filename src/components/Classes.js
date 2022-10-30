import React, { useState } from 'react'


export default function Classes({data, setUserSelect, userSelect, selectedStudents}) {

function handleSelectChange(e) {
    setUserSelect(e.target.value);
    
  }


const noNumbers = userSelect.replace(/[0-9]/g, '') + " " + userSelect.replace(/\D/g, '');




  return (
   <>
   <br/>
   <h3>{noNumbers}</h3>
   <h5>Total Students: {selectedStudents.length}  </h5>
   <br/>
   <select className="select"
   name="classes"
   onChange={handleSelectChange}
   value={userSelect}>
    <option value="All Students"> All Students </option>
    <option value="Winter2026">Winter 2026</option>
    <option value="Fall2026">Fall 2026</option>
    <option value="Summer2026">Summer 2026</option>
    <option value="Spring2026">Spring 2026</option>
    <option value="Winter2025">Winter 2025</option>
    <option value="Fall2025">Fall 2025</option>
    <option value="Summer2025">Summer 2025</option>
    <option value="Spring2025">Spring 2025</option>
   </select>
   </>
  )
}
