import style from "./Student.module.css";
import { useState } from "react";

export default function Notes(props) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !comment) return alert("You need to enter both values");
    const updatedList = [...list];
    updatedList.push({ user, comment });
    setList(updatedList);
    setUser("");
    setComment("");
  };
  return (
    <section className={[style.notes, props.show && style.show].join(" ")}>
      <h2>1-on-1 Notes</h2>
      <form onSubmit={handleSubmit}>
        <label>Commenter Name</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />{" "}
        <br />
        <label>Comment</label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />{" "}
        <br />
        <button>Add Note</button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.comment}>
            {item.user}. {item.comment}
          </li>
        ))}
      </ul>
    </section>
  );
}
