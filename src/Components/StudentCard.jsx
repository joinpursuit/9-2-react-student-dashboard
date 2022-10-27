import React from "react";
import { useState } from "react";
import ShowMore from "./ShowMore";

//could not use state in main computer ("diaplayallstudents") because the same information will be passed down to each of the cards. 
// moved state and functions that corresponded to states functionality in studentCard to pass information from main as its own new info in each card 

const StudentCard = ({
  data,
  newBirth,
  Track,
}) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [moreDetails, setMoreDetails] = useState(false);
  const [add, setAdd] = useState(data.notes)

  console.log(data.notes)

  function toggleShowMore(e) {
    e.preventDefault();
    setMoreDetails(!moreDetails);
  }

function commentHandler(e){
e.preventDefault()
setAdd([...add, {comment: comment, commenter: name} ])
setName("")
setComment("")
}

  return (
    <div>
      <li key={data.id} className="liInfo">
        <img src={data.profilePhoto} />
        <br />

        <div>
          <h3>{data.names.preferredName +" "+ data.names.surname}</h3>
          {data.username}
          <p>Birthday: {newBirth}</p>
          <br />
          <span>
            <button onClick={(e) => toggleShowMore(e)}>
              {!moreDetails ? "Show More" : "Show Less"}
            </button>
            <div className="ex-info">
              {moreDetails ? <ShowMore data={data} /> : null}
            </div>
          </span>
          <div>
            <form onSubmit={commentHandler}>
              <h2>1 On 1 Notes</h2>
              <div className="note-section">
                <label>
                  <div>Commenter Name</div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  <div>Comment</div>
                  <input
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </label>
                <br /> <br />
                <input type="submit" id="add-note" value="Add Note" />
              </div>
            </form>
            <ul>
              {add.map((N) => {
                return (
                  <li>
                    {N.commenter} says,
                    "{N.comment}"
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="onTrack">
          <h4> {Track ? "On Track To Graduate" : " "}</h4>
        </div>
      </li>
    </div>
  );
};

export default StudentCard;
