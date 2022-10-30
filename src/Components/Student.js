import React, { useState } from "react";

const Student = ({
  names,
  username,
  profilePhoto,
  dobreturn,
  cohort,
  onTrackToGraduate,
  codewars,
  certifications,
}) => {
  const [showText, setShowText] = useState(false);
  const [commenter, setCommenter] = useState("");
  const [Comment, setComment] = useState("");

  const onClick = (e) => {
    setShowText(!showText);

    if (e.target.textContent === "Show More") {
      e.target.textContent = "Show Less";
    } else {
      e.target.textContent = "Show More";
    }
  };

  const checkForGrad = (onTrackToGraduate) => {
    if (onTrackToGraduate === "On Track to Graduate.") {
      return <p style={{ color: "green" }}>On Track to Graduate.</p>;
    } else {
      return <p style={{ color: "red" }}>Not On Track to Graduate.</p>;
    }
  };

  const Text = () => {
    const TextColorChange = () => {
      if (
        ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) > 100
      ) {
        return (
          <>
            <span style={{ color: "green" }}>
              {" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
            </span>
            %
          </>
        );
      } else if (
        ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) >
          50 ||
        ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) < 100
      ) {
        return (
          <>
            <span style={{ color: "yellow" }}>
              {" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
            </span>
            %
          </>
        );
      } else if (
        ((codewars.current.total / codewars.goal.total) * 100).toFixed(0) < 50
      ) {
        return (
          <>
            <span style={{ color: "red" }}>
              {" "}
              {((codewars.current.total / codewars.goal.total) * 100).toFixed(
                0
              )}
            </span>
            %
          </>
        );
      }
    };
    //HTML symbols from here https://www.toptal.com/designers/htmlarrows/symbols/heavy-multiplication-x/
    const checkResume = () => {
      if (String(certifications.resume) === "true") {
        return <span>&#10003;</span>;
      } else {
        return <span>&#10539;</span>;
      }
    };

    const checkLinkedin = () => {
      if (String(certifications.linkedin) === "true") {
        return <span>&#10003;</span>;
      } else {
        return <span>&#10539;</span>;
      }
    };

    const checkMockInterview = () => {
      if (String(certifications.mockInterview) === "true") {
        return <span>&#10003;</span>;
      } else {
        return <span>&#10539;</span>;
      }
    };

    const checkGithub = () => {
      if (String(certifications.github) === "true") {
        return <span>&#10003;</span>;
      } else {
        return <span>&#10539;</span>;
      }
    };

    const handleCommenter = (e) => {
      // const {value} = e.target;
      setCommenter(e.target.value);
    };

    const handleComment = (e) => {
      const { value } = e.target;
      setComment(value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!commenter || !Comment) {
        alert("fill out the form");
      } else {
        alert("Submit went through");
      }
    };

    return (
      <div>
        <h3>Codewars:</h3>
        <p>Current Total: {codewars.current.total}</p>
        <p>Last Week: {codewars.current.lastWeek}</p>
        <p>Goal: {codewars.goal.total}</p>

        <p>Percent of Goal Achieved: {TextColorChange()} </p>

        <h3>Scores:</h3>
        <p>Assignments: {cohort.scores.assignments * 100}%</p>
        <p>Project: {cohort.scores.projects * 100}%</p>
        <p>Assessments: {cohort.scores.assessments * 100}%</p>

        <h3>Certifications:</h3>
        <p>Resume: {checkResume()} </p>
        <p>Linkedin: {checkLinkedin()}</p>
        <p>mockInterview: {checkMockInterview()}</p>
        <p>github: {checkGithub()}</p>

        <div>
          <form onSubmit={handleSubmit}>
            <h3>1-on-1 Notes</h3>
            <label>
              Commenter Name
              <input
                name="Commenter"
                type="text"
                placeholder="Your name"
                value={commenter}
                onChange={handleCommenter}
              />
            </label>
            <br />
            <br />
            <label>
              Comment{" "}
              <input
                type="text"
                placeholder="Comment"
                value={Comment}
                onChange={handleComment}
              />
            </label>
            <br />
            <br />
            <button type="sumbit">Add Note</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="StudentList">
      <img src={profilePhoto} />

      <div className="StudentListText">
        <p>
          <strong>
            {names.preferredName} {names.middleName[0]}. {names.surname}
          </strong>
        </p>
        <p>{username}</p>
        <p>Birthday: {dobreturn}</p>
        <p>{checkForGrad()}</p>

        <button onClick={onClick}>Show More</button>
        {showText ? <Text /> : null}

        <br />
        <br />
      </div>
    </div>
  );
};

export default Student;