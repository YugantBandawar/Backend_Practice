const express=require('express');
const app=express();
const userModel=require('./usermodel');



app.get("/",(req,res)=>{
    res.send("hey");
})

app.get("/create",async(req,res)=>{
    // let createduser=await userModel.create({
    //     name:"Yugyu",
    //     email:"Yuges@gmail.com",
    //     username:"Yugassnt"
    // })
    // res.send(createduser);
})

app.get("/update",async(req,res)=>{
    let updateduser=await userModel.findOneAndUpdate({username:"Yugant"},{name:"Yugant Bandawar"},{new:true})
    res.send(updateduser);
})

app.get("/read",async(req,res)=>{
    let users=await userModel.findOne({username:"Yug"});
    res.send(users);
})

app.get("/delete",async(req,res)=>{
    let users=await userModel.findOneAndDelete({username:"Yugyu"});
    res.send(users);
})
app.listen(3000);
