import React, { useState } from 'react'

const SignUpForm = () => {
  const [firstname, setFirstName]=useState('');
  const [lastname, setLastName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confirmpassword, setConfirmPassword]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');
  const handleSubmit= async(e)=>{
      e.preventDefault();
      try{
        const formData=await fetch("http://localhost:5000/form",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname, email, password, phoneNumber
          }),
        });
        const data=await formData.json();
        alert(data.message || "Form Submitted successfully");
      }catch(err){
        console.log("Submission error: ", err);
        alert("Failed to submit form");
      }
  }

  const handleFNameChange=(e)=>{
    setFirstName(e.target.value);
  }
  const handleLNameChange=(e)=>{
    setLastName(e.target.value);
  }
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
      <form onSubmit={handleSubmit}>
            <label htmlFor='fname'>Enter FirstName: </label>
            <input
                type='text'
                id='fname'
                value={firstname}
                placeholder='enter your name'
                onChange={handleFNameChange}
            /><br/><br/>

            <label htmlFor='lname'>Enter LastName: </label>
            <input
                type='text'
                id='lname'
                value={lastname}
                placeholder='enter last name'
                onChange={handleLNameChange}
            /><br/><br/>

            <label htmlFor='email'>Enter Email: </label>
            <input
                type='email'
                id='email'
                value={email}
                placeholder='enter a valid email'
                onChange={handleEmailChange}
            /><br/><br/>

            <label htmlFor='phone'>Enter Phone Number: </label>
            <input
                type='text'
                id='phone'
                value={phoneNumber}
                placeholder='enter a valid mobile number'
                onChange={handlePhoneNumberChange}
            /><br/><br/>

            <label htmlFor='password'>Enter Password: </label>
            <input
                type='password'
                id='password'
                value={password}
                placeholder='enter a valid password'
                onChange={handlePasswordChange}
            /><br/><br/>

            <label htmlFor='confrimpassword'>Confirm Password: </label>
            <input
                type='password'
                id='confirmpassword'
                value={confirmpassword}
                placeholder='retype password'
                onChange={handleConfirmPasswordChange}
            /><br/><br/>
            <button type="submit">Submit</button>
      </form>
      <p>Email: {email}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Password: {password}</p>
    </div>
  )
}

export default SignUpForm
