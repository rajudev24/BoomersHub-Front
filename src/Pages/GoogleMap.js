import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';


const GoogleMap = ({ property }) => {
    const [propertyLocation, setPropertyLocation] = useState({})


    const long = property?.long
    const lat = property?.lat

    const [viewPort, setViewPort] = useState({

        // width: 600,
        // height: 400,
        // latitude: property?.lat,
        // longitude: property?.long,
        // latitude: 28.1426,
        // longitude:  82.3759,
        zoom: 8
    })
    // console.log(property)
    return (
        <div>

            {
                property?.long && property?.lat ?
                <ReactMapGL
                className='rounded-xl'
                mapStyle="mapbox://styles/rajudeb/ckya467fz1l6p14qsmepgwxko"
                mapboxApiAccessToken='pk.eyJ1IjoicmFqdWRlYiIsImEiOiJja3lhM3h2bmIwMXUzMnBxdXV2aXRvOTJuIn0.2WhRYJ3pReuUNBdMcA6lzQ'
                width={600}
                height={400}
                latitude={28.1426}
                longitude={82.3759}
                {...viewPort}
                onViewportChange={(viewport) => setViewPort(viewport)}
            >

            </ReactMapGL> : <p>Loading..</p>
            }
        </div>

    );
};

export default GoogleMap;