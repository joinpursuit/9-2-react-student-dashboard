import React from "react";

function CommentsSection({ addNewNote, students }) {
  function handleSubmit(e) {
    e.preventDefault();
    addNewNote(students, e.target.comment.value, e.target.commentator.value);
  }

  return (
    <div className="one-on-one">
      <u>
        <h4>1-On-1 Notes</h4>
      </u>

      <form onSubmit={handleSubmit}>
        <label htmlFor="commentator">
          Commentator: <input id="commentator" type="text" name="commentator" />
        </label>{" "}
        <br />
        <label htmlFor="comment">
          Comment: <input id="comment" type="text" name="comment" />
        </label>
        <input type="submit" value="Add New Note" id="note-btn" />
      </form>
    </div>
  );
}

export default CommentsSection;
