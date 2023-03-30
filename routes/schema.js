const mongoose=require('mongoose');
const TaskSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            require:true
        },
        status:{
            type:String,
           enum : ['completed','ongoing','cancelled','unassigned'],
        default: 'unassigned'
        }
       
        
    }
)
module.exports=mongoose.model("Task",TaskSchema)