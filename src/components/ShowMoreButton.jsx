import React from "react";
import { useState } from "react";
import data from "../data/data";

function ShowMoreButton({ props }) {
  const [state, setState] = useState("Show More...");

  function handleSetState() {
    state === "Show Less..."
      ? setState("Show More...")
      : setState("Show Less...");
  }

  // function moreInfo (e) {
  //   return JSON.parse(e);
  // }

  const info = data.filter((e) => {
    return e.id === props;
  })[0];

  return (
    <div>
      <button onClick={handleSetState}>{state}</button>
      {state === "Show Less..." ? (
        <h5>
         <span id="id"> Id: </span> 
          {info.id}
        </h5>
      ) : null}
    </div>
  );
}

export default ShowMoreButton;
