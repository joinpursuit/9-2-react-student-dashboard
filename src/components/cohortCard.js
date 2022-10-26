import { useState } from "react";

function short_hand_name(names)
{
  let middleName = names['middleName']? names['middleName'][0].toUpperCase()+".":"";
  return `${names["preferredName"]} ${middleName} ${names['surname']}`
}
export default function ({cohort}) {
  ////variable////////////////////////////////////////////
  const local_stroage_key = "note"+cohort.id;
  let previus = JSON.parse(localStorage.getItem(local_stroage_key))||{notes:[]};//local stroage previus inputed cohort data 
  const [showMore,updateShowMore] = useState(false);
  let [note,updateNote] = useState({name:"",comment:""});//note form to stroage
  const [notes,updateNotes] = useState(previus['notes']||[]);//note list to display
  const [error,updateError] = useState("");
  let showOnTracktoGraduate = (Object.values(cohort.certifications).every(el=>el)&&cohort.codewars.current.total>600);
  let codewarsPercent = Math.round(cohort.codewars.current.total/cohort.codewars.goal.total*100);
  /////event/////////////////////////////////////////////
  const on_show_more_click = (evt)=>{
    if(!showMore) {
      evt.target.parentNode.parentNode.parentNode.parentNode.classList.add("cohortlistcontent-li-active");
    }
    else{
      evt.target.parentNode.parentNode.parentNode.parentNode.classList.remove("cohortlistcontent-li-active");
    }
    updateShowMore(pv=>!pv);
  }
  const on_note_submit = (evt)=>{
    evt.preventDefault();

    ///user input error handling 
    let errors = [];
    for(let x in note) if(!note[x]) {
      errors.push(x);
      evt.target[x].classList.add("error-input");
    }else{
      evt.target[x].classList.remove("error-input");
    }
    if (errors.length>0) {
      evt.target[errors.shift()].focus();
      updateError(`Please fill out the ${errors.join(", ")} before submit.`);
      return;
    }
    ///////////////////////////////////////////////

    note['datetime']=Date("now");
    previus['notes'] = previus['notes'] ? previus['notes'].concat(note):[note];
    localStorage.setItem(local_stroage_key, JSON.stringify(previus));
    updateNotes([...previus['notes']]);
    updateNote({name:"",comment:""});
    updateError("");

  }
  const on_note_change = (evt) =>{
    updateNote(pv=>({...pv,[evt.target.name]:evt.target.value}));
  }
  //////////////////////////////////////////////////////////
  function check_codewars_color(){
    if(codewarsPercent>=100){ 
      return "lightgreen"
    }else if (codewarsPercent>=50){ 
      return "yellow"
    }else 
      return "red";
  }
  /////////////////////////////////////////////////////////
  return (
    <li className="cohortlistcontent-li">
      <div className="cohortcard">
        <img src={cohort.profilePhoto}/>
        <div>
          <p><b>{short_hand_name(cohort.names)}</b></p>
          <p>{cohort.username}</p>
          <div><span>Brithday:</span><span>{cohort.dob}</span></div>
          <div><a className="showmore-button" state={showMore.toString()} href="#" onClick={on_show_more_click}>{showMore?"Show Less":"Show More"}...</a></div>
        </div>
        <div><p>{showOnTracktoGraduate?"On Track to Graduate":""}</p></div>
      </div>
      
      {showMore?/////////////////////////////////////
        <>
        <div className="cohortshowmore">
          <div>
            <p>Codewars:</p>
            <p><span>Current Total:</span> <span>{cohort.codewars.current.total}</span></p>
            <p><span>Last Week:</span> <span>{cohort.codewars.current.lastWeek}</span></p>
            <p><span>Goal:</span> <span>{cohort.codewars.goal.total}</span></p>
            <p><span>Percent of Goal Achieved:</span> <span className="codewarspercentspan" style={{color:check_codewars_color()}}>{codewarsPercent}%</span></p>
          </div>
          <div>
            <p>Scores:</p>
            <p><span>Assignments:</span> <span>{cohort.cohort.scores.assignments*100}%</span></p>
            <p><span>Projects:</span> <span>{cohort.cohort.scores.projects*100}%</span></p>
            <p><span>assessments:</span> <span>{cohort.cohort.scores.assessments*100}%</span></p>
          </div>
          <div>
            <p>Certifications:</p>
            <p><span>Resume:</span> <span>{cohort.certifications.resume?"✅":"❌"}</span></p>
            <p><span>Linkedin:</span> <span>{cohort.certifications.linkedin?"✅":"❌"}</span></p>
            <p><span>Github:</span> <span>{cohort.certifications.github?"✅":"❌"}</span></p>
            <p><span>Mock Interview:</span> <span>{cohort.certifications.mockInterview?"✅":"❌"}</span></p>
          </div>
        </div>

        <div className="oneononenote">
          <div>
            <form onSubmit={on_note_submit}>
              <div>
                <h3>1-on-1 Notes</h3>
                <label><span>Commenter Name:</span> <p><input type="text" name="name" value={note.name} onChange={on_note_change}/></p></label>
              </div>
              <div>
                <label><span>Commnent:</span> <p><textarea name="comment" width="20" value={note.comment} onChange={on_note_change}></textarea></p></label>
              </div>
              <button className="notebutton">Add Note...</button>
              <span className="errormessage">{error}</span>
            </form>
          </div>
          <div>
            <ul className="onoononenote-ol">
              {notes.map((el,idx)=>{return <li key={idx} title={el.datetime}>
                <span>{el.name}</span> says <span>"{el.comment}"</span>
              </li>})}
            </ul>
          </div>
        </div>
        </>
      :""}
    </li>
  )
}