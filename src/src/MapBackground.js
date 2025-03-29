import React, { useEffect } from 'react';

const MapBackground = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`; // <-- BURAYA KENDİ KEY'İNİ YAZ
    script.async = true;
    script.onload = () => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 }, // Örn: New York koordinatları
        zoom: 12,
        disableDefaultUI: true,
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="map"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0,
      }}
    />
  );
};

export default MapBackground;
