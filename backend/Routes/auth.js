const express=require('express');
const router=express.Router(); 
const bcrypt=require('bcrypt');
const NormalUser=require("../models/normalUsers");
router.post('/signup', async (req, res)=>{
    try{
        const {firstName, lastName, emailid, password, phoneNumber}=req.body;
        const hashedPassword=await bcrypt.hash(password, 10);
        const user=await new NormalUser({
            firstName,
            lastName,
            emailid,
            password: hashedPassword,
            phoneNumber,
        });
        await user.save();
        res.send("Data added successfully into NormalUser collection");
    }catch(err){
        res.status(400).send("ERROR : "+err.message);
    }
})
    
module.exports=router;