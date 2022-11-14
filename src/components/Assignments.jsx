export default function Assignments({cohort}){

    function assignments(student){
        const {scores} = student;
        return { assignments: scores.assignments * 100 +'%', projects: scores.projects * 100+'%', assessments: scores.assessments * 100+'%' }
    }

return (
<div>
    <div><h3>Assignments</h3></div>
    <div><strong className="marginl">Assignments: </strong> <span className="right marginr">{assignments(cohort).assignments}</span></div>
    <div><strong className="marginl">Projects: </strong><span className="right marginr">{assignments(cohort).projects}</span></div>
    <div><strong className="marginl">Assessments: </strong><span className="right marginr">{assignments(cohort).assessments}</span></div>
</div>
)
}