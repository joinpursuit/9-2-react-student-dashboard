export default function Codewars({codewars}) {

    function codewarscalc(codewars){
        const {current} = codewars;
        const {goal} = codewars;
        let total = ((current.total /goal.total) * 100).toFixed(2);
        let color = ''
        if (total < 50){
            color = 'red';
        } else if ((total >= 50) &&  (total < 100)){
            color = 'yellow';
        } else {
            color = 'green';
        }

        return {color: color, totalpoints: "Current Total: " + current.total, lastWeekTotal: "Last Week Total: "  + current.lastWeek, goal: "Goal: " + goal.total,total:  total +"%", lastWeek: "Total Reached: " +(current.lastWeek /goal.lastWeek) * 100 +"%"}
    }

return (
<div>
    <div><h3>Codewars</h3></div>
    <div>{codewarscalc(codewars).totalpoints}</div>
    <div>{codewarscalc(codewars).lastWeekTotal}</div>
    <div>{codewarscalc(codewars).goal}</div>
    <div>Total Reached: <span className={codewarscalc(codewars).color}>{codewarscalc(codewars).total}</span></div>
</div>)
}