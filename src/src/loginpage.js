import React, { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCV0Ajdezk2kzVdyBEFA-RgNsrxvwqYKMo`;
    script.async = true;
    script.onload = () => {
      new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 }, // New York
        zoom: 12,
        disableDefaultUI: true,
      });
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div style={styles.container}>
      <div id="map" style={styles.map}></div>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h1 style={styles.title}>ErX Driver</h1>
        <p style={styles.subtitle}>Welcome back, please login</p>
        <input style={styles.input} type="text" placeholder="Kullanıcı Adı" />
        <input style={styles.input} type="password" placeholder="Şifre" />
        <button style={styles.button}>Giriş Yap</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    position: 'relative',
    fontFamily: 'Segoe UI, sans-serif',
    overflow: 'hidden',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
  card: {
    position: 'relative',
    zIndex: 2,
    margin: 'auto',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '90%',
    maxWidth: '400px',
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: '20px',
    padding: '40px 30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
    backdropFilter: 'blur(10px)',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    marginBottom: '8px',
    color: '#007bff'
  },
  subtitle: {
    fontSize: '14px',
    marginBottom: '24px',
    color: '#444'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    marginBottom: '16px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '15px',
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  }
};

export default LoginPage;
