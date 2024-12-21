const express = require('express');
const app = express(); // create server instance
app.use("/test",(req,res)=>{
    res.send("Hello from the server"); 
});
app.use("/",(req,res)=>{
    res.send("Hello from home");
})
// listen
app.listen(3000,()=>{
    console.log("Server Started At 3000");
})