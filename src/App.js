import "./index.css";

import Header from "./components/Header";
import Students from "./components/Students";
import CohortListings from "./components/CohortListings";
import { useState } from "react";
function App() {
  /**state is set to false so that when a button is clicked in cohortListings
   * state will be toggled to true.
   */
  const [cohort, setCohort] = useState("");

  return (
    <>
      <Header />
      <CohortListings cohort={cohort} setCohort={setCohort} />
      <Students cohort={cohort} setCohort={setCohort} />
    </>
  );
}

export default App;
