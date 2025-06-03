import React, { useState } from 'react'

const SignUpForm = () => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confirmpassword, setConfirmPassword]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  const handleEmailChange=(e)=>{
    setEmail(e.target.value);
  }
  const handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  const handleConfirmPasswordChange=(e)=>{
    setConfirmPassword(e.target.value);
  }
  const handlePhoneNumberChange=(e)=>{
    setPhoneNumber(e.target.value);
  }
  return (
    <div>
      <h1>Signup Form</h1>
      <form>
            <label htmlFor='email'>Enter Email: </label>
            <input
                type='email'
                id='email'
                value={email}
                placeholder='enter a valid email'
                onChange={handleEmailChange}
            /><br/>
            <label htmlFor='phone'>Enter Phone Number: </label>
            <input
                type='text'
                id='phone'
                value={phoneNumber}
                placeholder='enter a valid mobile number'
                onChange={handlePhoneNumberChange}
            /><br/>
            <label htmlFor='password'>Enter Password: </label>
            <input
                type='password'
                id='password'
                value={password}
                placeholder='enter a valid password'
                onChange={handlePasswordChange}
            /><br/>
            <label htmlFor='confrimpassword'>Confirm Password: </label>
            <input
                type='password'
                id='confirmpassword'
                value={confirmpassword}
                placeholder='retype password'
                onChange={handleConfirmPasswordChange}
            />
      </form>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Password: {password}</p>
    </div>
  )
}

export default SignUpForm
