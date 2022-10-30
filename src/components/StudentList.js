import Student from "./Student";

export default function StudentList({ condition, allNotes, setAllNotes}) {

  return ( 
    <div className="StudentList"> 
      {condition.map((student) => (
        <Student key={student.id} student={student} allNotes={allNotes} setAllNotes={setAllNotes}/>
      ))}
    </div>
  );
}
