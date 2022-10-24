import CohortCard from "./cohortCard";

export default function ({cohortList,displayTitle}){
  return (
    <div>
      <div><b>{displayTitle}</b></div>
      <div style={{"margin-top":"1px"}}><span>Total Result:</span> <span>{cohortList.length}</span></div>
      <ul className="cohortlistcontent">
        {cohortList.map(el=><CohortCard key={el.id} cohort={el}/>)}
      </ul>
    </div>
  )
}