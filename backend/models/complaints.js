const mongoose=require("mongoose");
const FileComplaintSchema=new mongoose.Schema(
    {
        fromUserId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "NormalUser",
            default:"Anonymous"
        },
        complaintName: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 20,
        },
        complaintType: {
            type: String,
            default: "Pathole"
        },
        complaintIssue: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 50,
        },
    },
    {
        timestamps: true,
    }
)
FileComplaintSchema.index({fromUserId: 1});
const FileComplaintModel=new mongoose.model(
    "Complaint",
    FileComplaintSchema
)
module.exports=FileComplaintModel;