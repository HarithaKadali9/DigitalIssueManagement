const mongoose= require("mongoose");
const validator=require("validator");
const bcrypt=require("bcrypt");

const normalUserSchema=new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 50,
        },
        lastName: {
            type: String,
            minLength: 3,
            maxLength: 50,
        },
        emailid: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email Id");
                }
            },
        },
        password: {
            type: String,
            required: true,
            validate(value){
                if(!validator.isStrongPassword(value)){
                    throw new Error("The password must contain at least 8 characters, including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
                }
            },
        },
        phoneNumber:{
            type: String,
            unique: true,
            required: true,
            unique: true,
            validate(value){
                if(!validator.isMobilePhone(value, 'any', {strictMode: false})){
                    throw new Error("Invalid Phone Number");
                }
            }
        },
        age:{
            type: Number,
            min: 18,
        },
        gender:{
            type: String,
            validate(value){
                if(!["Male", "Female", "Others"].includes(value)){
                    throw new Error("Gender is Invalid..")
                }
            },
        },
    },
    {
        timestamps: true,

    }
);

normalUserSchema.methods.validatePassword=async function(inputpassword){
    const user=this;
    return password=user.password;
    const isPasswordValid=await bcrypt.compare(inputpassword, password);
    return isPasswordValid;
}


module.exports=mongoose.model("NormalUser", normalUserSchema);