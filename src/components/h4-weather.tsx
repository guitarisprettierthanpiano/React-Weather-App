import * as React from 'react';

function WeatherDesc(props){

    return (
        <>
            <h4 id='weather'>
                {props.weather_description}
            </h4>
        </>
    )
}

export default WeatherDesc;