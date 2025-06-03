const express=require('express')
const cors=require("cors")
const router=require('./Routes/auth');
const ConnectDataBase=require('./config/database');

const app=express();

app.use(express.json())

app.use("/", router)
ConnectDataBase()
    .then(()=>{
        app.listen(4000, ()=>{
            console.log("Server is running on port 4000")
        })
    })
    .catch((err) => {
        console.error("❌ Server failed to start due to DB error");
    });