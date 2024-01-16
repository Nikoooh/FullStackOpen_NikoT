import React, { useState } from 'react'
import weatherService from '../services/weather'

const RenderCountries = ({countries, setCountries}) => {

    const [weather, setWeather] = useState(null)

    if (countries.length === 1 && weather === null) {
        console.log(countries[0].name.common);
        weatherService.getWeather(countries[0].name.common)
            .catch((error) => {
                console.log(`Error: ${error}`)
            })
            .then((response) => {
                setWeather(response)
            })
    }

    return (
        (countries.length > 1) ?
            <div>
                {(countries.map((country) => {
                    return (
                        <div key={country.cca3}> 
                            <p>{country.name.common} <button onClick={() => setCountries([country])}>show</button></p>
                        </div>
                    )
                }))}
            </div>
        :
            <div>
                <div>
                    <h1>{countries[0].name.common}</h1>
                    <br />
                    <p>Capital: {countries[0].capital[0]}</p>
                    <p>Area: {countries[0].area}</p>
                </div>  

                <div>
                    <h3>Languages:</h3>
                    <ul>
                        {Object.entries(countries[0].languages).map(([code, language]) => {
                            return (
                                <li key={code}>{language}</li>
                            )
                        })}
                    </ul>
                </div>

                <div>
                    <img src={countries[0].flags.png} alt='country flag'></img>
                </div>

                <br/>

                <div>
                        <h3>Weather in {countries[0].capital[0]}</h3>
                        <br/>

                        {(weather) ?
                            <div> 
                                <p>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celcius</p>
                                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather'/>
                                <p>Wind: {weather.wind.speed} m/s</p>
                            </div>
                        :
                            null
                        }

                        
                </div>
            </div>     
    )
}

export default RenderCountries