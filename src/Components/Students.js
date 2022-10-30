import Student from "./Student";
import style from "./Students.module.css";

function Students(props) {
  const renderItems = () => {
    const items = [];
    for (const student of props.data) {
      items.push(
        <Student
          key={student.id}
          profilePhoto={student.profilePhoto}
          names={student.names}
          username={student.username}
          dob={student.dob}
          certificates={student.certifications}
          codewars={student.codewars}
          cohort={student.cohort}
        />
      );
    }
    return items;
  };
  return (
    <main className={style.students}>
      <h2>
        {props.activeCohort === ""
          ? "All Students"
          : props.activeCohort.replace("20", " 20")}
      </h2>
      <p>
        Total Students: <span>{props.data.length}</span>
      </p>
      <section>{renderItems()}</section>
    </main>
  );
}

export default Students;
