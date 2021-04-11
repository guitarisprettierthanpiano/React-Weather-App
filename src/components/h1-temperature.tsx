import * as React from 'react';

function Temperature(props){
    return (
        <>
            <h1 id='temperature'
                style={{color: props.font_color}}>
                {props.roundedTemp}°F
            </h1>
        </>
    )
}

export default Temperature;