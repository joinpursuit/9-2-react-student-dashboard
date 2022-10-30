import style from "./Student.module.css";
import Stats from "./Stats";
import { useState } from "react";
import Notes from "./Notes";

function Student(props) {
  const [show, setShow] = useState(false);
  const dob = new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    new Date(props.dob)
  );
  const graduating = () => {
    const { github, linkedin, resume, mockInterview } = props.certificates;
    const score = props.codewars.current.total;
    return github && linkedin && resume && mockInterview && score > 600;
  };
  return (
    <div className={style.student}>
      <div>
        <img src={props.profilePhoto} />
      </div>
      <div>
        <div className={style.header}>
          <h3>
            {props.names.preferredName} {props.names.middleName}{" "}
            {props.names.surname}
          </h3>
          {graduating() && <span className="green">On Track to Graduate</span>}
        </div>
        <p>{props.username}</p>
        <p>
          <span className="green">Birthday:</span>
          {dob}
        </p>
        <button onClick={() => setShow(!show)} className={style.toggle}>
          Show {show ? "Less" : "More"}
        </button>
      </div>
      <Stats
          codewars={props.codewars}
          certifications={props.certificates}
          cohort={props.cohort}
          show={show}
        />
        <Notes show={show}/>
    </div>
  );
}

export default Student;
