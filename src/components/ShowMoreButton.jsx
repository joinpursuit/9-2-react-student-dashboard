import React from "react";
import { useState } from "react";
import data from "../data/data";
import CommentsSection from "./CommentsSection.jsx";

function ShowMoreButton({ props, addNewNote }) {
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

  function findComment(data) {
    if (data.notes.length === 0) {
      return <li id="no-comment">no comments added yet..</li>;
    } else {
      return (
        <li id="added-comment">
          {data.notes[0].commenter} Said: "{data.notes[0].comment}"
        </li>
      );
    }
  }

  let goalPercent = (
    (info.codewars.current.total / info.codewars.goal.total) *
    100
  ).toFixed(2);

  return (
    <div>
      <button id="show-more-btn" onClick={handleSetState}>
        {state}
      </button>
      {state === "Show Less..." ? (
        <div className="show-more-info">
          <ul>
            <li id="codewars">
              <h4>CodeWars</h4>
              <hr />
              <h5>
                Total Current Score:{" "}
                <span id="tally">{info.codewars.current.total}</span>
              </h5>
              <h5>
                Last Week Score:{" "}
                <span id="tally">{info.codewars.current.lastWeek}</span>
              </h5>
              <h5>
                Goal:<span id="tally">{info.codewars.goal.total}</span>{" "}
              </h5>

              <div id="tally-goalPercent">
                {goalPercent >= 100 && (
                  <h5>
                    <span>Percent of goal achieved: </span>
                    <span style={{ color: "green" }}>{goalPercent}%</span>
                  </h5>
                )}
                {goalPercent > 50 && goalPercent < 100 && (
                  <h5>
                    <span>Percent of goal achieved: </span>
                    <span className="yellow">{goalPercent}%</span>
                  </h5>
                )}
                {goalPercent <= 50 && (
                  <h5>
                    <span>Percent of goal achieved: </span>
                    <span style={{ color: "red" }}>{goalPercent}%</span>
                  </h5>
                )}
              </div>
            </li>
            <li className="scores">
              <h4>Scores </h4>
              <hr />
              <h5>
                Assignments:{" "}
                <span id="tally">
                  {(info.cohort.scores.assignments * 100).toFixed(1)} %
                </span>
              </h5>
              <h5>
                Projects:{" "}
                <span id="tally">
                  {(info.cohort.scores.projects * 100).toFixed(1)} %
                </span>
              </h5>
              <h5>
                Assessments:{" "}
                <span id="tally">
                  {(info.cohort.scores.assessments * 100).toFixed(1)} %
                </span>
              </h5>
            </li>
            <li className="certs">
              <h4>Certifications </h4>
              <hr />

              <h5>Resume: {info.certifications.resume ? trueCheck : falseX}</h5>
              <h5>
                Linkedin: {info.certifications.linkedin ? trueCheck : falseX}
              </h5>
              <h5>Github: {info.certifications.github ? trueCheck : falseX}</h5>
              <h5>
                MockInterview:{" "}
                {info.certifications.mockInterview ? trueCheck : falseX}
              </h5>
            </li>
          </ul>
          <CommentsSection students={props} addNewNote={addNewNote} />
          <ul id="comment-list">
            <h5 className="comments">Comments</h5>
            <hr />
            {findComment(info)}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default ShowMoreButton;
