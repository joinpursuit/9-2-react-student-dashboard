export default function Assignments({cohort}){

    function assignments(student){
        const {scores} = student;
        return { assignments: "Assignments: "+ scores.assignments * 100 +'%', projects: "Projects: "+ scores.projects * 100+'%', assessments: "Assessments: "+ scores.assessments * 100+'%' }
    }

return (
<div>
    <div><h3>Assignments</h3></div>
    <div>{assignments(cohort).assignments}</div>
    <div>{assignments(cohort).projects}</div>
    <div>{assignments(cohort).assessments}</div>
</div>
)
}