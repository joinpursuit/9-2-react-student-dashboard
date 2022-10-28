import React from "react";
import data from "../data/data";

function CommentsSection({ props }) {
  function addNewComment() {
    const comment = EventTarget.value;
    return <li>{comment.innerhtml}</li>;
  }

  return (
    <div className="one-on-one">
      <u><h4>1-On-1 Notes</h4></u>
      <form>
        <label htmlFor="commentator">
          Commentator: <input id="commentator" type="text" value="" />
        </label>{" "}
        <br />
        <label htmlFor="comment">
          Comment: <input id="comment" type="text" value="" />
        </label>
        <input type="submit" value="Add New Note" id="note-btn" />
      </form>
    </div>
  );
}

export default CommentsSection;
