import React from 'react';

const LoginPage = () => {
  return (
    <div style={styles.container}>
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
    backgroundColor: '#f0f0f0', // Gri arka plan
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    minWidth: '300px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#007bff',
  },
  subtitle: {
    fontSize: '16px',
    color: '#777',
    marginBottom: '20px',
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
