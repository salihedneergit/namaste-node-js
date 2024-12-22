// middleware example to prevent unathorized access to webpage
const express = require('express');
const {auth} = require('../src/middleware/auth');
const app = express();
app.use('/admin',auth); 
app.get('/admin/getUserData',(req,res)=>{
    res.send("here is all the data : []");
})
app.delete('/admin/deleteUser',(req,res)=>{
    res.send("User is deleted");
})

app.listen(3000,()=>{
    console.log("Server started at 3000");
})