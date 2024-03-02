const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/trail")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
//phone number    
    phno:{
        type:String,
        required:true
    },
//pin code   
    pin:{
        type:String,
        required:true
    },
})

const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection

