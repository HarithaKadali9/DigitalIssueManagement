import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  
  return (
    <div>
      <h1>Login Form</h1>
      <form>
            <label htmlFor='email'>Enter Email: </label>
            <input
                type='email'
                id='email'
                value={email}
                placeholder='enter a valid email'
                onChange={handleEmailChange}
            /><br/>
            <label htmlFor='password'>Enter Password: </label>
            <input
                type='password'
                id='password'
                value={password}
                placeholder='enter a valid password'
                onChange={handlePasswordChange}
            /><br/>
      </form>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  )
}

export default LoginForm
