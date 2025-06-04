import React, { useState } from 'react'

const FileComplaint = () => {
  const [complaintName, setComplaintName]=useState('');
  const [complaintType, setComplaintType]=useState('');
  const [complaintIssue, setComplaintIssue]=useState('');
  const handleChange=(setter)=>(e)=>{
    setter(e.target.value);
  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const data=await fetch("http://localhost:4000/filecomplaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          complaintName,
          complaintType, 
          complaintIssue
        }),
    })
      console.log("Complaint filed successfully");
      alert("Complaint filed successfully");
    }catch(err){
      console.log(err);
      alert("Error filing complaint: " + err.message);
    }
  }
  
  
  return (
    <div>
      <h1>File a Complaint</h1>
      <form onSubmit={handleSubmit}>
            <label htmlFor='complaintname'>Enter Complaint Name: </label>
            <input
                type='text'
                id='complaintname'
                value={complaintName}
                placeholder='enter a complaint name'
                onChange={handleChange(setComplaintName)}
            /><br/>
            <label htmlFor='complainttype'>Type of Complaint: </label>
            <select value={complaintType} onChange={handleChange(setComplaintType)} id='complainttype'>
                <option value="">--please select complaint type--</option>
                <option value="pathole">pathole</option>
                <option value="streetlight">Street Light</option>
            </select>
            <br/>
            <label htmlFor='complaintissue'>Enter complaint issue: </label>
            <textarea rows={4} cols={50}
                id='complaintissue'
                placeholder='enter a complaint in detail'
                value={complaintIssue}
                onChange={handleChange(setComplaintIssue)}
            />
            <br/>
            
      </form>
      <button onClick={handleSubmit}>Submit Complaint</button>
      <p>Complaint Name: {complaintName}</p>
      <p>Complaint Type: {complaintType}</p>
      <p>Complaint Issue: {complaintIssue}</p>
    </div>
  )
}

export default FileComplaint;
