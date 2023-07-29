import express from  "express";
const app =express();
const portNum = 3002;

app.get("/" , (req , res)=>{
    res.send("Hello World");
});

app.listen(portNum , ()=>{
    console.log("the server has started , port number is "+ portNum);
});

