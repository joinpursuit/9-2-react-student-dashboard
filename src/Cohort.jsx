
function Cohort({ studentInfo, setChangeCohortDisplay, setCohortDisplay }) {
        let dates = [
      ...new Map(studentInfo.map((s) => [s.cohort.cohortCode, s])).keys(),
    ].sort((a,b) =>  b.slice(-4) - a.slice(-4)).reverse()
  
    
  
    function liHandling(e) {
      console.log(e.target.id);
      if (e.target.id !== "all") {
        studentInfo = studentInfo.filter((info) => {
          return info.cohort.cohortCode === e.target.id;
        });
        setChangeCohortDisplay(studentInfo)
        setCohortDisplay(e.target.id.slice(0, -4) + " " + e.target.id.slice(-4))
      } 
      else {
          setChangeCohortDisplay(studentInfo)
          setCohortDisplay('All Students')
      }
      console.log(studentInfo);
    }
  
    console.log(dates);
    return (
      <div>
        <h1 id="choose-date">    Choose a Class by Start Date</h1>
        <ul>
          <li id="all" onClick={liHandling}>
            All Students
          </li>
          <hr />
          {dates.map((date) => {
            return (
              <li id={date} className="seasons" onClick={liHandling}>
                {date.slice(0, -4) + " " + date.slice(-4)}
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default Cohort;