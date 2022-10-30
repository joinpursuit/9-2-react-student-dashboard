import "./index.css";
import Header from "./components/Header";
import Students from "./components/Students";
import CohortListings from "./components/CohortListings";
import { useState } from "react";
import StudentDetails from "./components/StudentDetails";

function App() {
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
