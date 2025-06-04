const express=require('express')
const cors=require("cors")
const ConnectDataBase=require('./config/database');

const app=express();
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
}))
app.use(express.json())

const router=require('./Routes/auth');
const complaintRouter=require("./Routes/complaint");

app.use("/", router)
app.use("/", complaintRouter);

ConnectDataBase()
    .then(()=>{
        app.listen(4000, ()=>{
            console.log("Server is running on port 4000")
        })
    })
    .catch((err) => {
        console.error("❌ Server failed to start due to DB error");
    });