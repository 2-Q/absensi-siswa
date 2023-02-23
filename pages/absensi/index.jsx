import React, { useEffect, useState } from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '600px'
};
function HadirPage(props){
    const [center, setCenters] = useState({ lat: 48.1467112, lng: 17.1385319 });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                setCenters({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
            });
        }
    }, [])
    console.log(center)

    return (<>
        <div>
          <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={center}
            setCenter={center}
          > 
           <Marker
            name={'This is test name'}
          />
          </Map>
        </div>
    </>)
}

export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_API_KEY
  })(HadirPage);