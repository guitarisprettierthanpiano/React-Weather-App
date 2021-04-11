import * as React from 'react';

function Location(props) {
    return (
        <>
            <h2 id='location'>
                {props.inputCity}
                {props.inputCountry}
            </h2>
        </>
    )
}

export default Location;