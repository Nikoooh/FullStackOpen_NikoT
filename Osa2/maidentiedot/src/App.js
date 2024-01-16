import React, { useState, useEffect } from 'react'
import RenderCountries from "./components/RenderCountries";
import countryService from './services/countries'

const App = () => {

  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    countryService.getCountries()
      .catch((error) => {
        console.log(`Unexpected error ${error}`)
      })
      .then(response => {
        setAllCountries(response)
      })
  }, [])

  useEffect(() => {
    setCountries(allCountries.filter(country => 
      country.name.common.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search])

  return (
    <div className="App">
      <div className="App">
        <p>Find countries <input placeholder="find countries" name='countryInput' onChange={(e) => setSearch(e.target.value)}></input></p>
      </div>
      {(search.length >= 1) ? 
        (search.length > 0 && countries.length === 0) ?
          <p>No matches</p>
        :
          (countries.length > 10 || countries.length === 0) ?          
            <p>Too many matches, specify another filter</p>
          :
            <RenderCountries countries={countries} setCountries={setCountries}/>       
      :
        null
      }
      
    </div>
  );
}

export default App;
