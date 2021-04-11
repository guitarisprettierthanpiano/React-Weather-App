import * as React from 'react';

function Location(props) {
    return (
        <>
            <h2 id='location'
                style={{color: props.font_color}}>
                {props.myCity}
                {props.myCountry}
            </h2>
        </>
    )
}

export default Location;