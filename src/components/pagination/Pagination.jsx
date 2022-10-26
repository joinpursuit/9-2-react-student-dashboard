import { useEffect, useState } from "react";
import "./Pagination.css";
export default function Pagination({
  filteredStudents: students,
  setStudentsToDisplay,
  selectedCohort,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const numOfPages = Math.ceil(students.length / resultsPerPage);

  // if different cohort is selected reset current page
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCohort]);

  // if currentPage is changed,get students according to current page and change state
  useEffect(() => {
    let studentsOnCurrentPage;
    if (currentPage < numOfPages) {
      studentsOnCurrentPage = students.slice(
        resultsPerPage * (currentPage - 1),
        resultsPerPage * currentPage
      );
      console.log(resultsPerPage * (currentPage - 1));
      console.log(resultsPerPage * currentPage);
    } else if (currentPage === numOfPages) {
      studentsOnCurrentPage = students.slice(
        resultsPerPage * (currentPage - 1)
      );
    }
    setStudentsToDisplay(studentsOnCurrentPage);
  }, [currentPage, numOfPages, setStudentsToDisplay, students]);

  function handleClick(e) {
    if (e.target.id === "next") {
      setCurrentPage(currentPage + 1);
    } else if (e.target.id === "prev") {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div className="pagination">
      <button
        className="prev"
        id="prev"
        onClick={handleClick}
        disabled={currentPage === 1 ? true : false}
      >
        Prev
      </button>
      <button>{currentPage}</button>
      <button
        id="next"
        className="next"
        onClick={handleClick}
        disabled={currentPage === numOfPages ? true : false}
      >
        Next
      </button>
    </div>
  );
}
