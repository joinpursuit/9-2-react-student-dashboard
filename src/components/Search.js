import React, { useState } from 'react'


export default function Search({setSearchTerm}) {




const handleSearch = (e) => {
    setSearchTerm(e.target.value)
}


  return (
    
    <div className='search'>
        <div className='searchInputs'>
<input type="text" onChange={handleSearch}/>
        </div>
    </div>

  )
}
