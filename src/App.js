import './App.css'
import { useState } from 'react';
import StudentsList from './components/StudentsList';
import NavBar from './components/NavBar'
import data from './data/data.json'

function App() {
  const [wrapCohort, setWrapCohort] = useState(data)
  const [cohortOf, setCohortOf] = useState('All students')

  function handleFilter(event, classe){
    event.preventDefault()

    let studentsFiltered = data.filter(student => student.cohort.cohortCode === classe)
    
    if (!classe) {
      setWrapCohort(data)
      setCohortOf('All students')
      return
    }

    const seasonClasse = classe.slice(0, -4)
    const yearClasse = classe.slice(-4)

    setCohortOf(`${seasonClasse} ${yearClasse}`)
    setWrapCohort(studentsFiltered)
  };

  // console.log(students)
    console.log(wrapCohort)

  return (
    <div>
      <header>
          <div className="header-container">
            <h1>Student Dashboard</h1>
          </div>
      </header>
      <main className="main-container">
        <aside>
          <section className="section-NavBar">
            <NavBar students={data} handleFilter={handleFilter} setWrapCohort={setWrapCohort} /> 
          </section>
        </aside>

        <StudentsList wrapCohort={wrapCohort} cohortOf= {cohortOf} />
      </main>
    </div>
    
    

    
  );
}

export default App;
