import React, { useState } from 'react'

const LoginForm = () => {
  const [emailid, setEmailId]=useState('');
  const [password, setPassword]=useState('');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const data=await fetch("http://localhost:4000/login", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          emailid, password
        }),
        
      });
      console.log("Login Successfull");
      alert("Login successfully");
    }catch(err){
      console.log("login fail: "+err.message)
      alert("Login Fail");
    }
  }
  const handleChange=(setter)=>(e)=>{
    setter(e.target.value);
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Enter Email: </label>
            <input
                type='email'
                id='email'
                value={emailid}
                placeholder='enter a valid email'
                onChange={handleChange(setEmailId)}
            /><br/>
            <label htmlFor='password'>Enter Password: </label>
            <input
                type='password'
                id='password'
                value={password}
                placeholder='enter a valid password'
                onChange={handleChange(setPassword)}
            /><br/>
            <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
