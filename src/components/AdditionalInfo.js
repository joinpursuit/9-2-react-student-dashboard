import { useState} from "react";

export default function AdditionalInfo({ student, allNotes, setAllNotes}) {
  const [text, setText] = useState({
    name: "",
    comment: ""
  });  

  const [comments, setComments] = useState(allNotes.filter(el => el.id === student.id));
  
  let percentColor;
  
  let percent = (
    (student.codewars.current.total / student.codewars.goal.total) *
    100
  ).toFixed(0);
  if (percent >= 100) {
    percentColor = "green";
  } else if (percent > 50) {
    percentColor = "yellow";
  } else {
    percentColor = "red";
  }

  function handleOnSubmit(e){
    e.preventDefault();

    if(text.name === ""){
        text.name = "Anonymous User";
    }
    if(text.comment === ""){
        return alert ("Comment box is empty");
    }
    text.id = student.id
    setAllNotes(pv => [...pv,text]) // interchangable
    // addNote(student.id, text);
    setComments([...comments,text]) // interchangable
    setText({
        name: "",
        comment: ""
      });
  }

  function handleOnChange(e, target){
    setText((pv) => ({...pv, [target]:e.target.value}))
  }

  return (
    <>
      <div className="AdditionalInfo">
        <div>
          <h4>Codewars:</h4>
          <p>Current Total: {student.codewars.current.total} </p>
          <p>Last Week: {student.codewars.current.lastWeek} </p>
          <p>Goal: {student.codewars.goal.total} </p>
          <p>Last Week: {student.codewars.current.lastWeek} </p>
          <p>
            Percent Goal Achieved:{" "}
            <span style={{ color: percentColor, background: "#bfbebe" }}>
              {" "}
              {percent}%{" "}
            </span>{" "}
          </p>
        </div>
        <div>
          <h4>Scores:</h4>
          <p>Assignments: {student.cohort.scores.assignments* 100}%</p>
          <p>Projects: {student.cohort.scores.projects * 100}%</p>
          <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
        </div>
        <div>
          <h4>Certifications:</h4>
          <p> Resume: {student.certifications.resume ? "✅" : "❌"}</p>
          <p> LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
          <p>
            {" "}
            Mock Interview: {student.certifications.mockInterview
              ? "✅"
              : "❌"}{" "}
          </p>
          <p> GitHub: {student.certifications.github ? "✅" : "❌"} </p>
        </div>
      </div>
      <div className="Comments">
        <h4> 1-on-1 Notes </h4>
        <form onSubmit={handleOnSubmit}>
            <label> Commenter Name: </label>
            <input type="text" value={text.name} onChange={ (e) => {handleOnChange(e, "name")}}/> 
            <label> Comment: </label>
            <input type="text" value={text.comment} onChange={ (e) => {handleOnChange(e, "comment")}}/> 
            <button> Add Note</button>
        </form>
        <ul>
            {comments.map((com, idx) => {
                return(
                    <li key={idx}>
                        {com.name} says, "{com.comment}"
                    </li>
                )
            })}
        </ul>
      </div>
    </>
  );
}
