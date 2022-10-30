import React, { useState } from 'react'

const Cohort = (props) => {
    const { cohort } = props 
   
    return (
        <div className='cohort'>
           {cohort}
        </div>
    )
}

export default Cohort 