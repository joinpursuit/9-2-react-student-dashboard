import { useState } from "react";
import CohortCard from "./cohortCard";
const trigger = (el, etype, custom) => {
  const evt = custom ?? new Event( etype, { bubbles: true } );
  el.dispatchEvent( evt );
};
export default function ({cohortList,displayTitle}){
  const [showAllMore,updateShowAllMore] = useState(false);

  const on_show_more_all_click = (evt)=>{
    let buttonList = document.querySelectorAll(".showmore-button");
    for(let x of buttonList)
    {
      if((!showAllMore).toString()===x.getAttribute("state")){
        continue;
      }
      trigger( x, `click` );
    }
    updateShowAllMore(pv=>!pv);
  }

  return (
    <div>
      <div><b>{displayTitle}</b></div>
      <div style={{display:"flex"}}>
        <span>Total Result:</span> 
        <span className="cohortlist-count">{cohortList.length}</span>
        <span style={{marginLeft: "auto"}}><a href="#" onClick={on_show_more_all_click}>
          {showAllMore
          ?"Show Less Students Detail"
          :"Show All Students Detail"}
          </a></span>
      </div>
      <ul className="cohortlistcontent">
        {cohortList.map(el=><CohortCard key={el.id} cohort={el}/>)}
      </ul>
    </div>
  )
}