export default function Widget({student}, {currStudent}){
    if (currStudent){
    
//     function codewars(codewars){
//         const {current} =  codewars;
//         const {goal} = codewars;
//         return {totalpoints: current.total, total: "Total Reached: " +((current.total /goal.total) * 100).toFixed(2) +"%", lastWeek: "Total Reached: " +(current.lastWeek /goal.lastWeek) * 100 +"%"}
//     }
// if (student === currStudent){
//     console.log(student.id);
//     return codewars(currStudent.codewars);
// } else {<></>}

console.log(currStudent.codewars) }
if (student == currStudent){
    return <p>LOOK MA</p>
}

}