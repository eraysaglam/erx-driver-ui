import React from 'react';

export default function LoginPage() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h2 style={styles.title}>ErX Driver Giriş</h2>
        <input type="text" placeholder="Sürücü ID" style={styles.input} />
        <input type="password" placeholder="Şifre" style={styles.input} />
        <button style={styles.button}>Giriş Yap</button>
        <div style={styles.footerLinks}>
          <a href="#" style={styles.link}>Şifremi unuttum</a>
          <span> | </span>
          <a href="#" style={styles.link}>Kayıt Ol</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1581091012184-7bde29b851e5?auto=format&fit=crop&w=1400&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 0
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
