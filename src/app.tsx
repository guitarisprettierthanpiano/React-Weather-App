import * as React from 'react';
import { useState } from 'react';

import CloudImage from './components/img-cloudimage'
import WeatherDesc from './components/h4-weather'
import Location from './components/h2-location'
import Temperature from './components/h1-temperature'

const apiUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = '67f50ab879a2ecdd402f6df384384d61';

function App() {
  //eventually get rid of this var and just put into fetch
  const [inputValue, setInputValue] = useState('');
  const [temperature, setTemperature] = useState();
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('')
  const [bGC, setBGC] = useState('thistle')
  const [icon, setIcon] = useState('02d');//sun w cloud default
  let iconImage = `http://openweathermap.org/img/wn/${icon}@4x.png`;

  const search = ev => {
    if (ev.key === "Enter") {
      fetch(`${apiUrl}/weather?q=${inputValue}&units=imperial&APPID=${apiKey}`)
        .then(res => res.json())
        .then(result => {

          //get 'city, country'
          setCity(result.name + ', ');
          setCountry(result.sys.country);

          //get the weather type
          setDescription(result.weather[0].description);
          setIcon(result.weather[0].icon);

          //h1 will show NaN if temperature isn't hidden on page load
          setTemperature(result.main.temp)
          document.getElementById('temperature').style["display"] = 'inherit';

          //change background color via function changeBGC
          changeBGC(result.weather[0].id);

          //reset search box
          setInputValue('');
        });
    }
  }

  function changeBGC(id){

    //these numbers are from https://openweathermap.org/weather-conditions
    switch (true) {
      case ((id => 200) && (300 > id)):
        setBGC('rgb(252, 193, 0)'); //thunderstorm
        break;
  
      case ((id => 300) && (400 > id)) :
        setBGC('rgb(0, 29, 126)'); //drizzle
        break;
  
      case ((id => 500) && (600 > id)):
        setBGC('rgb(0, 29, 126)'); //rain
        break;
  
      case ((id => 600) && (700 > id)):
        setBGC('white'); //snow
        break;
  
      case ((id => 700) && (800 > id)):
        setBGC('rgb(224, 224, 224)'); //atmosphere
        break;
      
      case (id === 800):
        setBGC('rgb(130, 220, 255)'); //clear
        break;
  
      default:
        setBGC('rgb(197, 239, 255)') //clouds
    }
  }

  return(
    <div className='container'>
      <div className='weather-container' 
           style={{backgroundColor: (bGC)}}>

        <input className="search-bar"
              type="text"
              placeholder="Search..."
              onChange={ev => setInputValue(ev.target.value)}
              value={inputValue}
              onKeyPress={search}
        />

        <Location 
          myCity = {city}
          myCountry={country}/>
          
        <Temperature 
          roundedTemp={Math.round(temperature)}/>

        <CloudImage 
          image={iconImage}/>

        <WeatherDesc 
          weather_description={description}/>

      </div>
    </div>
  )
}

export default App;