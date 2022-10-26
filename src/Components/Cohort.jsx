function Cohort({ studentInfo, setChangeCohortDisplay, setCohortDisplay }) {
  // created a variable to hold the student start dates.
  //by using ...new Map it grabs the cohortcode only once instead of all the times the server sees the code within the array object
  //mapped through 'dates' variable to get each date and put the date inside of an li element, which will appear as 8 different li's representing each cohort date
  //line 21 took the date ex. winter2025 and broke that up took off the ending '2025' than used slice again to put that shit back but with a space in between.
  //created a function to handle the li on click and display the info for each of the dates when clicked in the choose a class by start date

  
  let dates = [
    ...new Map(studentInfo.map((s) => [s.cohort.cohortCode, s])).keys(),
  ];

  

  function liHandling(e) {
    console.log(e.target.id);
    // if the target is not equal to all i want to filter thru studentinfo and search the id and produce infomation pertainning to that id that is targeted.
    //used filter to iterate thru data and searched cohortCode that was strictly equal to the target id that was clicked (li)

    if (e.target.id !== "all") {
      studentInfo = studentInfo.filter((info) => {
        return info.cohort.cohortCode === e.target.id;
      });
      setChangeCohortDisplay(studentInfo)
      setCohortDisplay(e.target.id.slice(0, -4) + " " + e.target.id.slice(-4))
    } 
    else {
        //works for all students now because of non filtered info will produce total amount of student info whereas above filters for certsin infomation
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
