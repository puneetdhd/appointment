const express=require("express");
const app=express();
const path=require("path");
const hbs= require("hbs");



const collection =require("./mongodb")

const templatePath= path.join(__dirname,'../templates');

app.use(express.json())
app.set("view engine","hbs");
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})


app.post("/signup",async(req,res)=>{
    const data={
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        age:req.body.age,
        phno:req.body.phno,
        pin:req.body.pin
        
    }
    await collection.Create([data])
    //will take the data and fill up in mongodb
    res.render("home")
})


app.post("/login",async(req,res)=>{
    try{
        const check=await collection.findOne({email:req.body.email})
        if(check.password===req.body.password){
            res.removeHeader("home")
        }
        else{
            res.send("wrong password")
        }
    }
    catch{
    res.render("home")
    }
})







app.listen(3000,()=>{
    console.log("port conneted");
})