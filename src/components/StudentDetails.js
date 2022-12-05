import { useState } from "react";
// import Student from "./Student";

const StudentDetails = ({ showStudentDetailsBool, student, students }) => {
  // State for two Textboxes
  const [notes, setNotes] = useState({ commenter: "", comment: "" });
  // To add new notes to the notes array -- default val is student.notes, the notes object in student
  const [newNotes, setNewNotes] = useState(student.notes);

  // evalutes from student.certifications and student.codewars score if the studrnt is on track to graduate and displays it to user
  const onTrackToGraduate = (student) => {
    if (
      student.certifications.resume === true &&
      student.certifications.linkedin === true &&
      student.certifications.github === true &&
      student.certifications.mockInterview === true &&
      student.codewars.current.total > 600
    ) {
      return <h4 className="graduate">On-track to Graduate: ✅</h4>;
    } else {
      return <h4 className="graduate">On-track to Graduate: ❌</h4>;
    }
  };

  //handles change event for text boxes to set state to value of user input in text boxes for writing a new note -- sets the empty object that will be injected into student.notes
  const inputChange = (e) => {
    setNotes({ ...notes, [e.target.id]: e.target.value });
  };

  //handsles submit of new notes form
  //1. prevents default browser refresh
  //2.places the user notes into student.notes
  //3.resets the user notes to an empty object to accept more notes
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewNotes([...newNotes, notes]);
    setNotes({ commenter: "", comment: "" });
  };

  // converts student.codewar scores to percentages and applies a className based on that calculation for css display in red (for bad) yellow(for medium) and green(for good)
  const scoresDisplayColor = (student) => {
    if (
      Math.round(
        (student.codewars.goal.total / student.codewars.current.total) * 100
      ) >= 99
    ) {
      return (
        <p className="high">
          Percent of Goal Achieved:{" "}
          {Math.round(
            (student.codewars.goal.total / student.codewars.current.total) * 100
          )}
          %{" "}
        </p>
      );
    }
    if (
      Math.round(
        (student.codewars.goal.total / student.codewars.current.total) * 100
      ) > 49 &&
      Math.round(
        (student.codewars.goal.total / student.codewars.current.total) * 100
      ) < 100
    ) {
      return (
        <p className="medium">
          Percent of Goal Achieved:{" "}
          {Math.round(
            (student.codewars.goal.total / student.codewars.current.total) * 100
          )}
          %{" "}
        </p>
      );
    }
    if (
      Math.round(
        (student.codewars.goal.total / student.codewars.current.total) * 100
      ) < 50
    ) {
      return (
        <p className="low">
          Percent of Goal Achieved:{" "}
          {Math.round(
            (student.codewars.goal.total / student.codewars.current.total) * 100
          )}
          %{" "}
        </p>
      );
    }
  };

  //********* RETURN ***********/

  return (
    <>
      {showStudentDetailsBool ? (
        <>
          <section className="studentStats">
            {" "}
            <article>
              <h4>Codewars</h4>
              <p>Current Total: {student.codewars.current.total}</p>
              <p>Last Week:{student.codewars.current.lastWeek}</p>
              <p>Goal:{student.codewars.goal.total}</p>
              {scoresDisplayColor(student)}
            </article>
            <article>
              <h4>Scores</h4>
              <p>
                Assignments:{" "}
                {Math.round(student.cohort.scores.assignments * 100)}%
              </p>
              <p>
                Projects: {Math.round(student.cohort.scores.projects * 100)}%
              </p>
              <p>
                Assesments:{" "}
                {Math.round(student.cohort.scores.assessments * 100)}%
              </p>
            </article>
            <article>
              <h4>Certifications</h4>
              <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
              <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
              <p>
                Mock Interview:{" "}
                {student.certifications.mockInterview ? "✅" : "❌"}
              </p>
              <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
              {onTrackToGraduate(student)}
            </article>
          </section>

          <form id="notesForm" onSubmit={handleSubmit}>
            <article>
              <h4>1-on-1 Notes</h4>
              <label htmlFor="commenter">
                Commenter Name:
                <input
                  id="commenter"
                  type="text"
                  name="commenter"
                  onChange={inputChange}
                  value={notes.commenter}
                ></input>
              </label>
            </article>
            <article>
              <label htmlFor="comment">
                Add Note:
                <input
                  id="comment"
                  type="text"
                  name="comment"
                  onChange={inputChange}
                  value={notes.comment}
                ></input>
              </label>
            </article>
            <button type="submit">Add Note</button>
            <ul>
              {newNotes.map((note) => {
                return (
                  <li>
                    {note.commenter} {note.comment}
                  </li>
                );
              })}
            </ul>
          </form>
        </>
      ) : null}
    </>
  );
};

export default StudentDetails;