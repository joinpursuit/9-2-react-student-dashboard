import React from "react";
import { useState } from "react";
import data from "../data/data";
import CommentsSection from "./CommentsSection.jsx";

function ShowMoreButton({ props }) {
  const [state, setState] = useState("Show More...");

  function handleSetState() {
    state === "Show Less..."
      ? setState("Show More...")
      : setState("Show Less...");
  }

  const falseX = <span>❌</span>;
  const trueCheck = <span>✅</span>;

  const info = data.filter((e) => {
    return e.id === props;
  })[0];

  return (
    <div>
      <button onClick={handleSetState}>{state}</button>
      {state === "Show Less..." ? (
        <div className="show-more-info">
          <ul>
            <li id="codewars">
              <h4>CodeWars</h4>
              <hr />
              <h6>
                Total Current Score:{" "}
                <span id="tally">{info.codewars.current.total}</span>
              </h6>
              <h6>
                Last Week Score:{" "}
                <span id="tally">{info.codewars.current.lastWeek}</span>
              </h6>
              <h6>
                Goal:<span id="tally">{info.codewars.goal.total}</span>{" "}
              </h6>
              <h6>
                Percentage Of Goal Achieved:{" "}
                <span id="tally">
                  {(
                    (info.codewars.current.total / info.codewars.goal.total) *
                    100
                  ).toFixed(2)}{" "}
                  %
                </span>
              </h6>
            </li>
            <li className="scores">
              <h4>Scores </h4>
              <hr />
              <h6>
                Assignments:{" "}
                <span id="tally">
                  {(info.cohort.scores.assignments * 100).toFixed(1)} %
                </span>
              </h6>
              <h6>
                Projects:{" "}
                <span id="tally">
                  {(info.cohort.scores.projects * 100).toFixed(1)} %
                </span>
              </h6>
              <h6>
                Assessments:{" "}
                <span id="tally">
                  {(info.cohort.scores.assessments * 100).toFixed(1)} %
                </span>
              </h6>
            </li>
            <li className="certs">
              <h4>Certifications </h4>
              <hr />

              <h6>Resume: {info.certifications.resume ? trueCheck : falseX}</h6>
              <h6>
                Linkedin: {info.certifications.linkedin ? trueCheck : falseX}
              </h6>
              <h6>Github: {info.certifications.github ? trueCheck : falseX}</h6>
              <h6>
                MockInterview:{" "}
                {info.certifications.mockInterview ? trueCheck : falseX}
              </h6>
            </li>
          </ul>
          <CommentsSection />
        </div>
      ) : null}
    </div>
  );
}

export default ShowMoreButton;
