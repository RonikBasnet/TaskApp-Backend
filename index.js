const express=require('express');
const mongoose = require('mongoose');
const path=require('path');
const app=express();
const bodyParser=require('body-parser');

const DbUser="mongodb+srv://Ishwor:password69@cluster0.4yct566.mongodb.net/?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology: true
};
mongoose.connect(DbUser,connectionParams);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(3000,()=>{
    console.log('Connected Successfully!!');
})
