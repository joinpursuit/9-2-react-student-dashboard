import { Link } from "react-router-dom";

export default function Selector({Students, currSemester}) {


console.log(currSemester);
let years = new Set(["1"]);
Students.forEach(student => years.add(student.cohort.cohortCode));
let list = [];
years.forEach(year => {
    list.push(year)
})
let list2 = list.sort((a, b) => {return a.localeCompare(b, undefined, {
numeric: false,
sensitivity: 'base'
})})
let list2025 = list2.filter(item =>item.includes('2025'));
let list2026 = list2.filter(item => item.includes('2026'));
let list4 = list2026.concat(list2025);
list4.unshift("All Students");
let list3 = list4.map(item =>{ 
return <h3><Link to={item}> {item.match(/[a-z]+|[^a-z]+/gi).join(' ')} </Link></h3>});

return (
    <> <div className='left'>
    <div>
        <h2>{currSemester.year.match(/[a-z]+|[^a-z]+/gi).join(' ')}</h2>
    </div>
    <div>
        <h4>Total Students: <span className="green">{currSemester.total} </span></h4>
    </div>{list3}
</div></>
)
}