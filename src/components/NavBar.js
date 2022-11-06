// import { useState } from 'react';
import './NavBar.css'
import './StudentsList'

function NavBar({ students, handleFilter }) {
    // const [cohortOf, SetCohortOf] = useState('')
    const firstMap = students.map((student) => {
        const { cohort } = student;
        return (
            `${cohort.cohortCode}-${cohort.cohortStartDate}`
        )
    })

    const getNoDuplicatedClasses = () => {
        const classesRegister = {}

        const noDuplicatedClasses = firstMap.filter(classe => {
            const [classeCode] = classe.split('-')

            if (!classesRegister[classeCode]) {
                classesRegister[classeCode] = classeCode

                return true
            } else {
                return false
            }
        })

        return noDuplicatedClasses
    }

    const uniqueClasses = getNoDuplicatedClasses()
    const sortedClasses = uniqueClasses
            .sort((prevClass, nextClass) => {
                const [, prevClassDateString] = prevClass.split('-') // '25/1/24'
                const [, nextClassDateString] = nextClass.split('-') // '03/8/25'

                const prevClassDate = new Date(prevClassDateString) // 25/1/24
                const nextClassDate = new Date(nextClassDateString) // 03/8/25

                return nextClassDate - prevClassDate
            })

    return (
        <section className='nav-bar'>
            <header>
                <h4 className='nav-bar__title'>Choose a Class by Start Date</h4>
            </header>

            <ul className='list-Classes'>
                <li className='nav-bar__link-item'>
                    <a className='nav-bar__link' onClick={(event) => handleFilter(event)}  href="/allStudents"> All students</a>
                </li>
                {sortedClasses.map(classe => {
                    // WINTER2026-25/1/24
                    // [WINTER2026, 25/1/24]
                    const [classeCode] = classe.split('-')

                    const seasonClasse = classeCode.slice(0, -4)
                    const yearClasse = classeCode.slice(-4)
                   
                    return (
                        <li className='nav-bar__link-item' key={classe}>
                            <a className='nav-bar__link' onClick={(event)=>{handleFilter(event, classeCode)}} href="classe">{seasonClasse} {yearClasse}</a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default NavBar