import { useState } from 'react'

const Login = () => {
  const [driverId, setDriverId] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (driverId === 'driver123' && password === 'password') {
      alert('Giriş başarılı!')
    } else {
      alert('Hatalı giriş!')
    }
  }

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',background:'#000'}}>
      <div style={{background:'#fff',padding:'20px',borderRadius:'10px',boxShadow:'0 4px 10px rgba(0,0,0,0.3)',width:'300px'}}>
        <h2 style={{textAlign:'center'}}>ErX Driver</h2>
        <input
          type="text"
          placeholder="Driver ID"
          value={driverId}
          onChange={(e) => setDriverId(e.target.value)}
          style={{width:'100%',marginBottom:'10px',padding:'8px',borderRadius:'5px',border:'1px solid gray'}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{width:'100%',marginBottom:'10px',padding:'8px',borderRadius:'5px',border:'1px solid gray'}}
        />
        <button onClick={handleLogin} style={{width:'100%',padding:'8px',borderRadius:'5px',border:'none',background:'#000',color:'#fff'}}>
          Log In
        </button>
      </div>
    </div>
  )
}

export default Login
