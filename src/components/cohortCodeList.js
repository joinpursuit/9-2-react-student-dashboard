function changeCode(cohortCode){
  return [cohortCode.slice(0,cohortCode.length-4),cohortCode.slice(-4)];
}
function compareCode(a,b){
  let season = {Spring:1,Summer:2,Fall:3,Winter:4};
  let c1 = changeCode(a);
  let c2 = changeCode(b);
  c1 = c1[1].concat(season[c1[0]]);
  c2 = c2[1].concat(season[c2[0]]);
  return Number(c2) - Number(c1);
}

export default function ({students,updateCohortList,updateTitle}){
  /////event//////////////////
  const on_date_click = (evt,cohortCode) => {
    updateCohortList(students.filter(el=>el.cohort.cohortCode===cohortCode));
    updateTitle(changeCode(cohortCode).join(" "));

    document.querySelector(".cohortlist").childNodes.forEach(el=>el.classList.remove("cohortactive"));
    evt.target.classList.add("cohortactive");
  }
  const on_all_click =(evt) =>{
    updateTitle("All Students");
    updateCohortList(students);

    document.querySelector(".cohortlist").childNodes.forEach(el=>el.classList.remove("cohortactive"));
    evt.target.classList.add("cohortactive");
  }
  /////////////////////////
  let cohortCodeList ={};
  for(let x of students)
  {
    let cC = x.cohort.cohortCode;
    cohortCodeList[cC] = cohortCodeList[cC] ? cohortCodeList[cC]+1 : 1 ;
  }
  let list = Object.keys(cohortCodeList).sort(compareCode);

  return (
    <>
      <div>
        
      </div>
      <h3 style={{margin:"5.5px"}}>Choose a Class by Start Date</h3>
      <ul className="cohortlist">
        <li key={0} className="cohortactive" onClick={on_all_click}><b>All Students</b></li>
        {list.map((el,idx)=>
          <li key={idx+1} onClick={(evt)=>{on_date_click(evt,el)}}><b>{changeCode(el).join(" ")}</b></li>
        )}
      </ul>
    </>
  )
}