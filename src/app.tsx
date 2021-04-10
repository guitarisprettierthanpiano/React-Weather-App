import * as React from 'react';
import { useState } from 'react';

function App() {
  const apiKey = '67f50ab879a2ecdd402f6df384384d61';
  const apiUrl = 'https://api.openweathermap.org/data/2.5';
  //eventually get rid of this var and just put into fetch 
  const [query, setQuery] = useState('');
  const [temperature, setWeather] = useState(0);
  const [country, setCountry] = useState('');
  const [name, setName] = useState('');
  const [myObject, setMyObject] = useState({})

  const search = ev => {
    if (ev.key === "Enter") {
      fetch(`${apiUrl}/weather?q=${query}&units=imperial&APPID=${apiKey}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result.main.temp);
          setCountry(result.sys.country);
          setName(result.name);
          setQuery('Enter another location...');
          setMyObject(result)
          console.log(setMyObject);
        });
    }
  }
  return(

    <div className='container'>
      <div className='weatherstuff'>
        <input 
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={ev => setQuery(ev.target.value)}
              value={query}
              onKeyPress={search}
        />
        <h2>{name}, {country}</h2>
        <h1>{Math.round(temperature)} °F</h1>
        <span></span>
      </div>
    </div>
  )
}

export default App;