import * as React from 'react';

function Temperature(props){
    return (
        <>
            <h1 id = 'temperature'
                style={{display:'none'}}>
                {props.roundedTemp}°F
            </h1>
        </>
    )
}

export default Temperature;