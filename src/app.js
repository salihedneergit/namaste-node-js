// middleware example to prevent unathorized access to webpage
const express = require('express');
const app = express();
app.get('/getUserData',(req,res)=>{
    // try{
    //     throw new Error("Dvsss");
    //     res.send("User data");
    // }
    // catch(error){
    //     res.status(500).send("Error");
    // }
    throw new Error("Dv");
})
// orders matters a lot in express
/*
When an error is thrown, Express bypasses the normal route/middleware
execution and looks for the next error-handling middleware in the stack. (same or parent domain only)
*/
app.get('/getUserData',(req,res)=>{
    // try{
    //     throw new Error("Dvsss");
    //     res.send("User data");
    // }
    // catch(error){
    //     res.status(500).send("Error");
    // }
    throw new Error("Dv");
})
app.use('/',(error,req,res,next)=>{
    if(error){
        // log your error
        res.status(500).send("Something went wrong : 500");
    }
    res.send("hello");
})
app.listen(3000,()=>{
    console.log("Server started at 3000");
})