import style from "./Sidebar.module.css";

function Sidebar(props) {
  const renderCohorts = () => {
    const list = [];
    for (const item of props.cohorts) {
      const cohort = item.cohortCode.replace("20", " 20");

      list.push(
        <li
          key={item.cohortCode}
          onClick={() => props.updateCohort(item.cohortCode)}
        >
          {cohort}
        </li>
      );
    }
    return list;
  };
  return (
    <aside className={style.sidebar}>
      <h2>Choose a Class by Start Date</h2>
      <ul>
        <li onClick={() => props.updateCohort("")}>All Students</li>
        {renderCohorts()}
      </ul>
    </aside>
  );
}

export default Sidebar;
