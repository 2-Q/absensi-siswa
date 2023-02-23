import React, { useEffect, useState } from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};
function hadirPage(props,onMarkerClick){
    const [Lat, setLat] = useState(1)
    const [Long, setLong] = useState(1)

    useEffect(() => {
        if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude);
        });
        }
    }, [])
    

    return (<>
        <div>
          <Map
            google={props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: Lat,
              lng: Long
            }}
          >
           <Marker
            onClick={onMarkerClick}
            name={'This is test name'}
          />
          </Map>
        </div>
    </>)
}

export default GoogleApiWrapper({
    apiKey: process.env.NEXT_PUBLIC_API_KEY
  })(hadirPage);