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

        return {color: color, totalpoints: current.total, lastWeekTotal: current.lastWeek, goal: goal.total,total:  total +"%", lastWeek: "Total Reached: " +(current.lastWeek /goal.lastWeek) * 100 +"%"}
    }

return (
<div>
    <div><h3>Codewars</h3></div>
    <div><strong>Current Total:</strong> <span className="right">{codewarscalc(codewars).totalpoints}</span></div>
    <div><strong>Last Week Total:</strong> <span className="right">{codewarscalc(codewars).lastWeekTotal}</span></div>
    <div><strong>Goal:</strong> <span className="right">{codewarscalc(codewars).goal}</span></div>
    <div><strong>Total Reached:</strong> <span className={codewarscalc(codewars).color}>{codewarscalc(codewars).total}</span></div>
</div>)
}