import React from 'react';
import MapBackground from './MapBackground'; // Import the MapBackground component

const LoginPage = () => {
  return (
    <div style={styles.container}>
      <MapBackground /> {/* Call the map background here */}
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h1>ErX Driver</h1>
        <h3>Welcome back, please login</h3>
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
    backgroundColor: '#e0e0e0',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 2,
    minWidth: '300px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '6px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default LoginPage;
