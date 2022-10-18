import React, { useState } from 'react';
import axios from 'axios';
import './UserPage.css';
import RegisterPage from '../RegisterPage/RegisterPage';
import SkydiveForm from '../SkydiveForm/SkydiveForm';


function OpenWeather() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&exclude=daily&appid=4f622403804d6a3a268a6783989388f8`
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  }

return (
  <section className="apiData">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter location"
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>
              {data.name}
            </p>
            </div>
            <div className="temp">
              <p>Current Temperature</p>
              {data.main ? <h1>{data.main.temp} °F</h1> : null}  
          </div>
          <div className="description">
            <p>Description??</p>
            {data.weather ? <h1>{data.weather[0].description}</h1> : null }
          </div>
          <div className="cloudCoverage">
            <p>Cloud Coverage</p>
            {data.clouds ? <h1>{data.clouds.all}</h1> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>Feels Like</p>
            <p>{data.main ? <h1>{data.main.feels_like}°F</h1> : null}</p>
          </div>
          <div className="wind">
            <p>Wind</p>
            <p> {data.wind ? <h1>{data.wind.speed} mph</h1> : null} </p>
          </div>
        </div>
      </div>
      <SkydiveForm />
      </section>
)

}


export default OpenWeather
