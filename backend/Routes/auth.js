const express=require('express');
const router=express.Router(); 
const bcrypt=require('bcrypt');
const validator=require("validator");

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
        const token=await user.getJwt();
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            expires: new Date(Date.now()+7*24*60*60*1000), // 7 days
        })
        res.status(200).json({ message: "Data added successfully into NormalUser collection" });

    }catch(err){
        res.status(400).json({ message: "ERROR: " + err.message });

    }
})

router.post("/login", async(req,res)=>{
    try{
        const {emailid, password}=req.body;

        if(!validator.isEmail(emailid)) throw new Error("Invalid emailid..!");

        const user=await NormalUser.findOne({emailid: emailid});

        if(!user) throw new Error("Invalid credentials-email");

        const isPassword=await user.validatePassword(password);

        if(isPassword){
            const token=await user.getJwt();
            res.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                expires: new Date(Date.now()+7 * 24 * 60 * 60 * 1000),
            });
            res.send("Login Successfull");

        }else{
            res.send("Invalid credentials - password");
        }

    }catch(err){
        res.status(400).send("Error occured: "+err.message);
    }
})
    
module.exports=router;