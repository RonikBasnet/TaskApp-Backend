const mongoose =require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        contact:{
            type:String,
            require:true

        },
        userId:{
            type:String,
            require:true,
            unique:true,
        }
    }

)
module.exports=mongoose.model("User",userSchema)