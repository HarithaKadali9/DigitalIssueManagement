const mongoose=require("mongoose");
const ConnectDB=async ()=>{
    try{
        await mongoose.connect("mongodb+srv://HarithaKadali:Haritha23@namasthenode.edsir.mongodb.net/?retryWrites=true&w=majority&appName=NamastheNode/devTinder");
        console.log("MongoDB Connected");
    }catch(err){
        console.error("Error connecting DB ", err);
    }
}
module.exports=ConnectDB;