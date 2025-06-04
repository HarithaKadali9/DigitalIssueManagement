const mongoose =require("mongoose");
const express=require('express')
const complaintRouter=express.Router();

const Complaint=require("../models/complaints")

complaintRouter.post("/filecomplaint", async(req, res)=>{
    try{
        const {fromUserId, complaintName, complaintType, complaintIssue}=req.body;
        const c=await new Complaint({
            fromUserId, complaintName, complaintType, complaintIssue,
        });
        await c.save();
        res.send("Complaint saved successfully");
    }catch(err){
        res.status(400).send("Error occured while saving complaint in DB..."+err.message);
    }
})

complaintRouter.get("/feed", async(req, res)=>{
    try{
        const complaints=await Complaint.find().sort({createdAt: -1});
        res.status(200).json(complaints);
    }catch(err){
        console.log("Error fetching complaints: ", err);
        res.status(500).json({message: "Error fetching complaints"});
    }
})
module.exports=complaintRouter;