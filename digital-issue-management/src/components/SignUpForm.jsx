import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [emailid, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [confirmpassword, setConfirmPassword]=useState('');
  const [phoneNumber, setPhoneNumber]=useState('');

  const navigate=useNavigate();
  const handleSubmit= async(e)=>{
      e.preventDefault();
      try{
        const formData=await fetch("http://localhost:4000/signup",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", 
          body: JSON.stringify({
            firstName,
            lastName, emailid, password, phoneNumber
          }),
        });
        const data=await formData.json();
        alert(data.message || "Form Submitted successfully");
      }catch(err){
        console.log("Submission error: "+err.message);
        
      }
  }

  const handleChange=(setter)=>(e)=>{
    setter(e.target.value);
  }

  return (
    <div>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
            <label htmlFor='fname'>Enter FirstName: </label>
            <input
                type='text'
                id='fname'
                value={firstName}
                placeholder='enter your name'
                onChange={handleChange(setFirstName)}
            /><br/><br/>

            <label htmlFor='lname'>Enter LastName: </label>
            <input
                type='text'
                id='lname'
                value={lastName}
                placeholder='enter last name'
                onChange={handleChange(setLastName)}
            /><br/><br/>

            <label htmlFor='email'>Enter Email: </label>
            <input
                type='email'
                id='email'
                value={emailid}
                placeholder='enter a valid email'
                onChange={handleChange(setEmail)}
            /><br/><br/>

            <label htmlFor='phone'>Enter Phone Number: </label>
            <input
                type='tel'
                id='phone'
                value={phoneNumber}
                placeholder='enter a valid mobile number'
                onChange={handleChange(setPhoneNumber)}
            /><br/><br/>

            <label htmlFor='password'>Enter Password: </label>
            <input
                type='password'
                id='password'
                value={password}
                placeholder='enter a valid password'
                onChange={handleChange(setPassword)}
            /><br/><br/>

            <label htmlFor='confirmpassword'>Enter Confirm Password: </label>
            <input
                type='password'
                id='confirmpassword'
                value={confirmpassword}
                placeholder='enter a valid password'
                onChange={handleChange(setConfirmPassword)}
            /><br/><br/>
            
            <button type="submit">Submit</button>
            <button onClick={()=>navigate("/")}>Already signed in</button>
      </form>
    </div>
  )
}

export default SignUpForm
