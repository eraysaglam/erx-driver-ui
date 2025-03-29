import React, { useEffect } from 'react';

const MapBackground = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCV0Ajdezk2kzVdyBEFA-RgNsrxvwqYKMo`;
    script.async = true;
    script.onload = () => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
        disableDefaultUI: true,
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div id="map" style={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 0
    }} />
  );
};

export default MapBackground;
