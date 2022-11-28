export default function Certifications({certifications}){
    function certificationsli(student){
        const {linkedin, resume, github, mockInterview} = student;
        return (
        <>
            <div><strong className="marginl">LinkedIn:</strong> <span className="right marginr">{linkedin? "✅" : "❌"}</span></div>
            <div><strong className="marginl">Resume:</strong> <span className="right marginr">{resume? "✅" : "❌"}</span></div>
            <div><strong className="marginl">Github: </strong><span className="right marginr">{github? "✅" : "❌"}</span></div>
            <div><strong className="marginl">Mock Interview: </strong><span className="right marginr">{mockInterview? "✅" : "❌"}</span></div>
        </>
        )
    }

return(
<div>
        <div><h3>Certifications</h3></div>
        <div>{certificationsli(certifications)}</div>
</div>
)}