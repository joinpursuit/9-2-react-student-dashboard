import { useState } from "react";
export default function Form({ fellow }) {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");
  const [newNote, setNewNote] = useState(fellow.notes);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = { commenter: commenter, comment: comment };
    setNewNote([...newNote, obj]);
    setComment("");
    setCommenter("");
  }

  return (
    <section className="formSection">
      <h4>1-on-1 Notes</h4>
      <form>
        <label id="commenter">Commenter Name: </label>
        <input
          type="text"
          id="commenter"
          value={commenter}
          onChange={(e) => setCommenter(e.target.value)}
        ></input>
        <label id="comment">Comment: </label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit} className="formButton">
          Add Note
        </button>
      </form>
      <ul className="notes">
        {newNote.map((comments) => {
          return (
            <li>
              {comments.commenter} says, {comments.comment}
            </li>
          );
        })}
        {handleSubmit}
      </ul>
    </section>
  );
}
