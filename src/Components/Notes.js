import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";

function AddNotes({ noteLi, id, addNoteToStudent }) {
  //this handles the one on one section which includes the form and the ability to add a comment which shows as an li
  const [addComment, setAddComment] = useState({
    commenter: "",
    comment: "",
  });

  function handleComments(e) {
    const newObj = { ...addComment };
    newObj[e.target.id] = e.target.value;
    setAddComment(newObj);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    addNoteToStudent(id, addComment);
    setAddComment({ commenter: "", comment: "" });
  }

  return (
    <section>
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleFormSubmit} id="form">
        <label htmlFor="commenter">Commenter Name: </label>
        <input
          id="commenter"
          type="text"
          value={addComment.commenter}
          onChange={handleComments}
          placeholder="Name Here..."
        />
        <br />
        <br />
        <label htmlFor="commenter">Comment: </label>
        <input
          id="comment"
          type="text"
          value={addComment.comment}
          onChange={handleComments}
          placeholder="Comment Here..."
        />
        <br />
        <br />
        <button className="note-button">Add Note</button>
      </form>
      <ul>
        {noteLi.map((n) => {
          return (
            <li key={generateUniqueID()}>
              {n.commenter} says, "{n.comment}"
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default AddNotes;
