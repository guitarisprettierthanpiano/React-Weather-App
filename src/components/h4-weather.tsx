import * as React from 'react';

function WeatherDesc(props){

    return (
        <>
            <h4 id='weather'
                style={{color: props.font_color}}>
                {props.weather_description}
            </h4>
        </>
    )
}

export default WeatherDesc;