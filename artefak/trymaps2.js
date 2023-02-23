import React, { useEffect, useState } from 'react'
import Head from 'next/head';

export default function HadirPage(){
    var Cond=true

    useEffect(() => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
          center:  { lat: 41.0082, lng: 28.9784 },
          zoom: 14
        });

        const outerCoords = [
          { lat: -7.850823, lng: 111.501428 },
          { lat: 18.466, lng: -66.118 },
          { lat: 32.321, lng: -64.757 },
        ];
        const innerCoords = [
          { lat: 28.745, lng: -70.579 },
          { lat: 29.57, lng: -67.514 },
          { lat: 27.339, lng: -66.668 },
        ];
        // Construct the polygon, including both paths.
        const bermudaTriangle = new google.maps.Polygon({
          paths: [outerCoords, innerCoords],
          strokeColor: "#FFC107",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FFC107",
          fillOpacity: 0.35,
        });
        bermudaTriangle.setMap(map);

      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            new google.maps.Marker({
              position: pos,
              map,
            });
            if(Cond){
              map.setCenter(pos);
              Cond=false
            }
          }
        );
      }
    }, [])
    

    return (<>
        <Head>
          <script src="https://maps.googleapis.com/maps/api/js?key=API_KEY" />
        </Head>
        <div style={{ width: 500, height: 500 }} id="map" />
    </>)
}
