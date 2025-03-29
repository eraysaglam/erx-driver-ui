import React from 'react';

const MapBackground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#f0f0f0', // Yalnızca arka plan rengi
        zIndex: 0,
      }}
    />
  );
};

export default MapBackground;
