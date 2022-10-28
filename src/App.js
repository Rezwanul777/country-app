import React, { useState } from 'react'
import { useEffect } from 'react'

const url="https://restcountries.com/v3.1/all"

function App() {

  const[isLoading,setIsLoading]=useState(true)
  const[error,setError]=useState(null)
  const[countries,setCountries]=useState([])

  // data fetch
  const fetchData=async(url)=>{
    setIsLoading(true)

    // error handeling
   try {
    const response=await fetch(url)
    const data=await response.json()
    setCountries(data)
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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;