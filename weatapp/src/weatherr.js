import React, { useState } from 'react'
import axios from 'axios'
export default function Weatherr() {
    const[city, setCity] = useState('');
    const[weather, setWeather]= useState('');
    const handleCityChange = (event) =>
    {
        setCity(event.target.value)
    }
    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'f578dd6780d04daf07d3ccd9be0b5ea1'}`)
            console.log(response)
            setWeather(response);
        } catch (error) {
            console.log("error fetching", error)
        }
    }
    
    const handleClick = () =>{
        fetchWeather();
        
    }
  return (
    <div className="blue-box">
        <input type='text' placeholder='Enter City name' value={city} onChange={handleCityChange}/>
         <br/>
        <button onClick={handleClick}>Click to get the weather now!!</button>
        {weather && <>
        <div>
            <h1>{weather.data.name}</h1>
            <h3>Temperature is {weather.data.main.temp}Kelvin</h3>
            <h4>Minimum temperature is {weather.data.main.temp_min}Kelvin</h4> 
            <h4>Maximum temperature is {weather.data.main.temp_max}Kelvin</h4>
            <h3>Humidity is {weather.data.main.humidity}</h3>
            <h3> ~{weather.data.weather[0].main}~</h3>
        </div>
        
        </>
        }
    </div>
  )
}

