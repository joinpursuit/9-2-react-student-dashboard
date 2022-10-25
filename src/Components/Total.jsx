import { useState } from "react";


function DisplayAllStudents({studentCount, setstudentCount,studentInfo}){
 
    const [moreInfo, setMoreInfo] = useState('')

    function totalStudents(student){
        setstudentCount([...studentCount, student])
    }

    function HandleMoreInfo(studentInfo, setMoreInfo, e){
        e.preventDefault();
setMoreInfo(
       
           <>
            <h1>CodeWars:</h1>
            {studentInfo.codewars}
            </>
        )   
    }

    // let totalOfStudents = studentInfo.reduce((acc, students) => acc + students, 0);
// console.log(studentInfo)
    return(
        <main className="mainTotal">
            <ul>
                {studentInfo.map((data) => {
              return (
                <div>
                    <li key={data.id}  className="liInfo">
                <img src={data.profilePhoto} />
            <div>
                <h3>{data.names.preferredName + " " +
                data.names.surname}</h3>
                <p>Birthday: {data.dob}</p>
{data.username}
           <button value='moreInfo' onClick={(e) => HandleMoreInfo({studentInfo, setMoreInfo, e})}>More Info</button>     
</div>
</li>
</div>
              )  
                

})}
                </ul>
        </main>
    )
};

export default DisplayAllStudents;