import React, { useState } from "react";

const CohortList = ({ datas, setFilterCohort }) => {
  let arr = []; //orginal all of the CohortCode
  let sortedCohortcode = []; //sorted-cohortcode

  const loopCohortUniList = () => {
    //add to sorted arr.
    for (let i = 0; i < datas.length; i++) {
      if (arr.includes(datas[i].cohort.cohortCode) === false)
        arr.push(datas[i].cohort.cohortCode);
    }
  };

  const changeFilter = (e) => {
    setFilterCohort(e.target.textContent);
  };

  return (
    <div className="Cohortlist">
      <h2>Choose a Class by Start Date</h2>

      <ul>
        <li onClick={changeFilter}>All students</li>
        <hr />
        {loopCohortUniList()}

        {arr.map((cohortCode) => {
          if (
            cohortCode.substring(0, cohortCode.length - 4) === "Spring" &&
            cohortCode.substring(cohortCode.length - 4) === "2025"
          ) {
            sortedCohortcode[0] = `${cohortCode.substring(
              0,
              cohortCode.length - 4
            )} ${cohortCode.substring(cohortCode.length - 4)}`;
          } else if (
            cohortCode.substring(0, cohortCode.length - 4) === "Summer" &&
            cohortCode.substring(cohortCode.length - 4) === "2025"
          ) {
            sortedCohortcode[1] = `${cohortCode.substring(
              0,
              cohortCode.length - 4
            )} ${cohortCode.substring(cohortCode.length - 4)}`;
          } else if (
            cohortCode.substring(0, cohortCode.length - 4) === "Fall" &&
            cohortCode.substring(cohortCode.length - 4) === "2025"
          ) {
            sortedCohortcode[2] = `${cohortCode.substring(
              0,
              cohortCode.length - 4
            )} ${cohortCode.substring(cohortCode.length - 4)}`;
          } else if (
            cohortCode.substring(0, cohortCode.length - 4) === "Winter" &&
            cohortCode.substring(cohortCode.length - 4) === "2025"
          ) {
            sortedCohortcode[3] = `${cohortCode.substring(
              0,
              cohortCode.length - 4
            )} ${cohortCode.substring(cohortCode.length - 4)}`;
          }
          if (
            cohortCode.substring(0, cohortCode.length - 4) === "Spring" &&
            cohortCode.substring(cohortCode.length - 4) === "2026"
          ) {
            sortedCohortcode[4] = `${cohortCode.substring(
              0,
              cohortCode.length - 4
            )} ${cohortCode.substring(cohortCode.length - 4)}`;
          } else if (
            cohortCode.substring(0, cohortCode.length - 4) === "Summer" &&
            cohortCode.substring(cohortCode.length - 4) === "2026"
          ) {
            sortedCohortcode[5] = `${cohortCode.substring(
              0,
              cohortCode.length - 4
            )} ${cohortCode.substring(cohortCode.length - 4)}`;
          } else if (
            cohortCode.substring(0, cohortCode.length - 4) === "Fall" &&
            cohortCode.substring(cohortCode.length - 4) === "2026"
          ) {
            sortedCohortcode[6] = `${cohortCode.substring(
              0,
              cohortCode.length - 4
            )} ${cohortCode.substring(cohortCode.length - 4)}`;
          } else if (
            cohortCode.substring(0, cohortCode.length - 4) === "Winter" &&
            cohortCode.substring(cohortCode.length - 4) === "2026"
          ) {
            sortedCohortcode[7] = `${cohortCode.substring(
              0,
              cohortCode.length - 4
            )} ${cohortCode.substring(cohortCode.length - 4)}`;
          }
        })}

        {sortedCohortcode.map((cohortCode) => {
          return (
            <>
              <li className="hoverColor" onClick={changeFilter}>
                {cohortCode}
              </li>
              <hr />
              {/* <hr style={{color:"green"}}></hr> */}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default CohortList;
