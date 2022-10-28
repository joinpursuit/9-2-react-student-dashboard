import { useState } from "react";
import "./SearchByName.css";
export default function SearchByName({ searchStudent }) {
  const [searchMode, setSearchMode] = useState("name");

  function handleSelectChange(e) {
    setSearchMode(e.target.value);
  }

  return (
    <div className="search-by-name">
      <select onChange={handleSelectChange}>
        <option value="name">Search by Name</option>
        <option value="email">Search by Email</option>
      </select>
      <input
        type="text"
        placeholder="s e a r c h . . .                             🔍"
        onChange={(e) => searchStudent(e, searchMode)}
      ></input>
    </div>
  );
}
