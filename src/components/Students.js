import React, { useState } from "react";
import Student from "./Student";

export default function Students({ data, studentNotes, updatedNotesForStudent }) {


  return (
    <div className="students">
      {data.map((student) => (
        <Student student={student} studentNotes={studentNotes[student.id]} updatedNotesForStudent={updatedNotesForStudent} />
      ))}
    </div>
  );
}
