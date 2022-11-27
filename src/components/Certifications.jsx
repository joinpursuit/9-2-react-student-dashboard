export default function Certifications({certifications}){
    function certificationsli(student){
        const {linkedin, resume, github, mockInterview} = student;
        return (
        <>
            <li><strong>LinkedIn:</strong> <span className="right">{linkedin? "✅" : "❌"}</span></li>
            <li><strong>Resume:</strong> <span className="right">{resume? "✅" : "❌"}</span></li>
            <li><strong>Github: </strong><span className="right">{github? "✅" : "❌"}</span></li>
            <li><strong>Mock Interview: </strong><span className="right">{mockInterview? "✅" : "❌"}</span></li>
        </>
        )
    }

return(
<div>
        <div><h3>Certifications</h3></div>
        <ul>{certificationsli(certifications)}</ul>
</div>
)}