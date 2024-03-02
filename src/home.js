const express= require("express");
const app=express();
const path=require("path");
const hbs= require("ejs");

const collection =require("./mongodb")

const templatePath= path.join(__dirname,'../templates');

app.use(express.json())
app.set("view engine","ejs");
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))