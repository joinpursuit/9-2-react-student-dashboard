function Cohort(){

    
    function startDate(studentInfo){
        return(
            studentInfo.map((cohort) => {
            if(cohort.cohort.cohortCode === "winter2025"){
                return(
                    <div>
                        <h1>Winter 2025</h1>
                        <h2>Total Count:</h2>
                <ul>
               
                    <li key={cohort.id}>
                <img src={cohort.profilePhoto} />
                <h3>{cohort.names.preferredName + " " +
                cohort.names.surname}</h3>
                <p>Birthday: {cohort.dob}</p>
                {cohort.username}
                    </li>
                </ul>
                    </div>
            
          )   
            }
          })
       )};
       
            
        
    
    return (
        <div>
            <h1>Choose a Class by Start Date</h1>
            <label><h3>All Students</h3></label>
            <select>
                <option value="Winter 2025"></option>
            </select>
        </div>
    )
}

export default Cohort;