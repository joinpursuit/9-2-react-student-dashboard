
import data from "../data/data.json";

export default function StudentDetails  ()  {


  return (<div className="studentDetails">

<ul>
    {
        data.map((fellow) => {
            return (
                <li key={fellow.id}>
                    <h6>codewars: </h6>
                    <p>{fellow.codewars.current.total}</p>
            <p>{fellow.codewars.current.lastWeek}</p>
            <p>{fellow.codewars.goal.total}</p>
            <p>Percent of Goal Achieved: </p> 
                    <h6>Scores</h6>
            <p>Assignments: {}</p>
            <p>Projects: {}</p>
            <p>Assesments: {}</p>
                    <h6>certifications</h6>
                    <p>Resume: {fellow.certifications.resume ? "✅ ": "❌"}</p>
                    <p>Linkedin: {fellow.certifications.linkedin ? "✅ ": "❌"} </p>
                    <p>mockInterview:{fellow.certifications.mockInterview ? "✅ ": "❌"} </p>
                    <p>Github: {fellow.certifications.github? "✅ ": "❌"} </p>
                    
                </li>
            )
        })
    }
</ul>

  </div>)
};


