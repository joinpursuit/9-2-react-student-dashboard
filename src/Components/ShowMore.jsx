const ShowMore = ({ data }) => {

    let percent = ((data.codewars.current.total / data.codewars.goal.total) * 100).toFixed(2)
   
    return (

    <div className="additional-info">
        <div>
    <span className="codewar"><h3>CodeWars:</h3></span>
    <p>
        <span>Current Total: </span>
        {data.codewars.current.total}
    </p>
    <p>
        <span>Last Week: </span>
        {data.codewars.current.lastWeek}
    </p>
    <p>
        <span>Goal: </span>
        {data.codewars.goal.total}
    </p>
    <p>
        <span>Precent Of Goal Achieved: </span>
       <div className={percent >= 100? "a" : percent > 50 ? "b": "c"}>{percent}%</div> 
    </p>
    </div>
    <div>
    <p>
        <span className="score"><h3>Scores:</h3></span>
    </p>
    <p>
        <span>Assignments: </span>
        {data.cohort.scores.assignments}%
    </p>
    <p>
        <span>Projects: </span>                                           
        {data.cohort.scores.projects}%
    </p>
    <p>
        <span>Assessments: </span>
        {data.cohort.scores.assessments}%
    </p>
    </div>
    <div>
    <p>
        <span className="certify"><h3>Certifications:</h3></span>
    </p>
    <p>
        <span>Resume: </span>
        {data.certifications.resume ? '✅' : '❌'}
    </p>
    <p>
        <span>LinkedIn: </span>
        {data.certifications.linkedin ? '✅' : '❌'}
    </p>
    <p>
        <span>GitHub: </span>
        {data.certifications.github ? '✅' : '❌'}
    </p>
    <p>
        <span>Mock Interview: </span>
        {data.certifications.mockInterview ? '✅' : '❌'}
    </p>
    </div>
   
    </div>
  
  );
};

export default ShowMore;