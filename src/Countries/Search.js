import React from 'react'
import { useState,useEffect } from 'react'

const Search = (props) => {
   const[searchCountries,setSearchCountries]=useState("")
   const handleSearchCountries=(e)=>{
      setSearchCountries(e.target.value);
   }
   useEffect(()=>{
   props.onSearch(searchCountries)
     
   },[searchCountries])
  return (
    <div style={{textAlign:'center'}}>
      <input type="text"  placeholder='Search Your Country' value={searchCountries} onChange={handleSearchCountries}/>
    </div>
  )
}

export default Search