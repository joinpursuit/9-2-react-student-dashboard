import { useState } from "react";
import Header from "./components/Header";
import Students from "./components/Students";
import Cohorts from "./components/Cohort";
import data from "./data/data";

function App() {
  //********* STATES *********/

  //array state that becomes the list of cohorts passed to Cohorts.js
  const [cohorts, setCohorts] = useState([]);

  // string state that gets set to the id string from each individual cohort at the click event of each cohort li
  let [cohortClicked, setCohortClicked] = useState("All Students");

  //boolean state passed to cohorts to be set at click and then passed down to student to reset the student details to show nothing when a cohort is changed
  const [resetStudentDetails, setResetStudentDetails] = useState(null);

  //********* NON-STATE VARS *********/

  //colects all the cohort codes for each student -- will be turned into a list of unique cohortCodes
  let cohortArr = [];

  //********* HELPERS *********/

  //1. cohortListAside loops through data and sets the value of cohortArr to the be the value of the cohortCode for each element in the original array.
  //2. then creates a new set (cohortSet to remove the duplicates)
  //3. set is then converted back into array form (arrOfCohorts)
  //4. finally sets state of setCohorts to be the value of arrOfCohorts
  const cohortListAside = (e) => {
    data.forEach((el) => {
      cohortArr = [...cohortArr, el.cohort.cohortCode];
    });
    const cohortSet = new Set(cohortArr);
    const arrOfCohorts = Array.from(cohortSet);

    //Formats arrOfCohorts so that the state is set with a space between season and year
    arrOfCohorts.sort().map((cohort) => {
      setCohorts(arrOfCohorts);
    });
  };

  //helper function that is propped down to cohorts and students to turn the cohortCode into a human readable string with space between season and year

  const splitString = (el) => {
    let sliceLetters = el.slice(0, -4);
    let sliceNums = el.slice(-4);
    return sliceLetters + " " + sliceNums;
  };

  // Filter for each cohort array based on click event on each cohort li in Cohorts
  let filteredCohortInfoData = data.filter((filteredCohort, i, data) => {
    if (cohortClicked === filteredCohort.cohort.cohortCode) {
      return filteredCohort;
    }
    if (cohortClicked === "All Students") {
      return data;
    }
  });

  // console.log(filteredCohortInfoData);

  //********** RETURN **********/

  return (
    <div className="page" onLoad={cohortListAside}>
      <Header />
      <Cohorts
        cohorts={cohorts}
        cohortListAside={cohortListAside}
        setCohortClicked={setCohortClicked}
        splitString={splitString}
        setResetStudentDetails={setResetStudentDetails}
      />
      <Students
        students={data}
        filteredCohortInfoData={filteredCohortInfoData}
        cohortClicked={cohortClicked}
        splitString={splitString}
        resetStudentDetails={resetStudentDetails}
      />
    </div>
  );
}

export default App;