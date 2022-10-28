import React, { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Countries from './Countries/Countries'
import Search from './Countries/Search'

const url="https://restcountries.com/v3.1/all"

function App() {

  const[isLoading,setIsLoading]=useState(true)
  const[error,setError]=useState(null)
  const[countries,setCountries]=useState([])
  const[filteredCountries,setFilteredCountries]=useState(countries)

  // data fetch
  const fetchData=async(url)=>{
    setIsLoading(true)

    // error handeling
   try {
    const response=await fetch(url)
    const data=await response.json()
    setCountries(data)
    setFilteredCountries(data)
    setIsLoading(false)
    //console.log(data);
    setError(null)
   } catch (error) {
    setIsLoading(false)
    setError(error)
   }
  }

  // use effect hook
  useEffect(()=>{
    fetchData(url)
  },[])

  const handleRemoveCountry=(name)=>{
   const filtered=filteredCountries.filter((country)=>country.name.common !==name)
   setFilteredCountries(filtered)
   }

   const handleSearchCountries=(searchValue)=>{
    let value=searchValue.toLowerCase()
    const newCountries=countries.filter((country)=>{
      const countryName=country.name.common.toLowerCase()
      return countryName.startsWith(value)
    })
    setFilteredCountries(newCountries)
   }

  return (
    <div >
      <h1>Country App</h1>
     <Search onSearch={handleSearchCountries}/>
      {isLoading && <h2>Loading...</h2>}
      {error && <h3>{error.message}</h3>}
      {countries && <Countries countries={filteredCountries}  
     onRemoveCountry={handleRemoveCountry}/>}
     

    </div>
  );
}

export default App;