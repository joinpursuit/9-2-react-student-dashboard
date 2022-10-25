import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";

function AddNotes({ noteLi, setNoteLi }) {
  const [addComment, setAddComment] = useState({
    commenter: "",
    comment: "",
  });

  function handleComments(e) {
    setAddComment({ ...addComment, [e.target.id]: e.target.value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setNoteLi([...noteLi, addComment]);
    setAddComment({ commenter: "", comment: "" });
  }

  return (
    <section>
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="commenter">Commenter Name </label>
        <input
          id="commenter"
          type="text"
          value={addComment.commenter}
          onChange={handleComments}
          placeholder="Your Name Here..."
        />
        <br />
        <br />
        <label htmlFor="commenter">Comment </label>
        <input
          id="comment"
          type="text"
          value={addComment.comment}
          onChange={handleComments}
          placeholder="Your Comment Here..."
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
