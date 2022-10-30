export default function CohortList({ data, handleFilterChange }) {
  const cohorts = [];
  data.forEach((student) => {
    if (!cohorts.includes(student.cohort.cohortCode)) {
      cohorts.push(student.cohort.cohortCode);
    }
  });
  
  let classYear = cohorts.map(cohort => {
    let year = cohort.slice(cohort.length-4);
    let season = cohort.slice(0, cohort.length-4)
    return [season, Number(year)]
  });

  let seasons = ["Spring", "Summer", "Fall", "Winter"];

  classYear.sort((a,b) => b[1]-a[1] || seasons.indexOf(b[0]) - seasons.indexOf(a[0]));
  classYear = classYear.map(cohort => cohort.join(" "))

  let cohortlist = ["All Students", ...classYear]

  return (
    <ul className="CohortList">
      {cohortlist.map((cohort) => {
        console.log(cohort);
        return (
          <li key={cohort} >
            <button className="Cohort" onClick={(e) => handleFilterChange(e, cohort)}>
              {cohort} 
            </button>
          </li>
        );
      })}
    </ul>
  );
}
