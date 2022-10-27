import "./SearchByName.css";
export default function SearchByName({ searchStudent }) {
  return (
    <div className="search-by-name">
      <input
        type="text"
        placeholder="search students by name...  🔍"
        onChange={searchStudent}
      ></input>
    </div>
  );
}
