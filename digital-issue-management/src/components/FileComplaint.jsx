import React, { useState } from 'react'

const FileComplaint = () => {
  const [complaintName, setComplaintName]=useState('');
  const [complaintType, setComplaintType]=useState('');
  const [complaintIssue, setComplaintIssue]=useState('');
  const handleComplaintName=(e)=>{
    setComplaintName(e.target.value);
  }
  const handleComplaintType=(e)=>{
    setComplaintType(e.target.value);
  }
  const handleComplaintIssue=(e)=>{
    setComplaintIssue(e.target.value);
  }
  
  
  return (
    <div>
      <h1>File a Complaint</h1>
      <form>
            <label htmlFor='complaintname'>Enter Complaint Name: </label>
            <input
                type='text'
                id='complaintname'
                value={complaintName}
                placeholder='enter a complaint name'
                onChange={handleComplaintName}
            /><br/>
            <label htmlFor='complainttype'>Type of Complaint: </label>
            <select value={complaintType} onChange={handleComplaintType}>
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
                onChange={handleComplaintIssue}
            />
            <br/>
            
      </form>
      <p>Complaint Name: {complaintName}</p>
      <p>Complaint Type: {complaintType}</p>
      <p>Complaint Issue: {complaintIssue}</p>
    </div>
  )
}

export default FileComplaint;
