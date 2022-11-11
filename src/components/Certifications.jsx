export default function Certifications({certifications}){
console.log(certifications)
    function certificationsli(student){
        const {linkedin, resume, github, mockInterview} = student;
        return (<>
            <li><strong>LinkedIn:</strong> {linkedin? "✅" : "❌"}</li>
            <li><strong>Resume:</strong> {resume? "✅" : "❌"}</li>
            <li><strong>Github: </strong>{github? "✅" : "❌"}</li>
            <li><strong>Mock Interview: </strong>{mockInterview? "✅" : "❌"}</li>
            </>
        )
    }

return(
<div>
        <div><h3>Certifications</h3></div>
        <ul>{certificationsli(certifications)}</ul>
</div>
)
}