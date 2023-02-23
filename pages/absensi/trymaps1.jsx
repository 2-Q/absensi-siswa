import React, { useEffect } from 'react'
import Head from 'next/head';

export default function hadirPage() {


  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 8
    });

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log(pos)
          new google.maps.Marker({
            position: pos,
            map,
            title: "Hello World!",
          });
          map.setCenter(pos);
        }
      );
    }
  }, [])


  return (<>
    <Head>
      <script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}`} />
    </Head>
    <div style={{ width: 500, height: 500 }} id="map" />
  </>)
}
