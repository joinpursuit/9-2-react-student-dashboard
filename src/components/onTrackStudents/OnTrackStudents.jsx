import { useEffect, useState } from "react";
import "./OnTrackStudents.css";

export default function OnTrackStudents({ students, setFilteredStudents }) {
  const [showGradStudents, setShowGradStudents] = useState(false);
  const [gradStudents, setGradStudents] = useState([]);

  useEffect(() => {
    const graduatingStudents = students.filter(
      (student) =>
        Object.values(student.certifications).every((v) => v) &&
        student.codewars.current.total > 600
    );
    setGradStudents(graduatingStudents);
  }, [students]);

  useEffect(() => {
    if (showGradStudents) {
      setFilteredStudents(gradStudents);
    } else {
      setFilteredStudents(students);
    }
  }, [showGradStudents, gradStudents, setFilteredStudents, students]);

  return (
    <div className="show-on-track-students">
      <button onClick={() => setShowGradStudents(!showGradStudents)}>
        {showGradStudents ? "Hide" : "Show"} On Track To Graduate Students
      </button>
    </div>
  );
}
