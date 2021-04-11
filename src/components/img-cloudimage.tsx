import * as React from 'react';

function CloudImage(props) {
    return (
        <>
            <img id='image'
                src={props.image}
            />
        </>
    )
}

export default CloudImage;