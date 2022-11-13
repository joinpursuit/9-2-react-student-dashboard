export default function Assignments({cohort}){

    function assignments(student){
        const {scores} = student;
        return { assignments: scores.assignments * 100 +'%', projects: scores.projects * 100+'%', assessments: scores.assessments * 100+'%' }
    }

return (
<div>
    <div><h3>Assignments</h3></div>
    <div><strong>Assignments: </strong> <span className="right">{assignments(cohort).assignments}</span></div>
    <div><strong>Projects: </strong><span className="right">{assignments(cohort).projects}</span></div>
    <div><strong>Assessments: </strong><span className="right">{assignments(cohort).assessments}</span></div>
</div>
)
}