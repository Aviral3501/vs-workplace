import express from  "express";
const app =express();
const portNum = 3000;

app.get("/" , (req , res)=>{
    res.send("<h1>Hello vbhdcdkj World<h1>");
});
app.get("/contact" , (req , res )=> {
    var contact = "493034094305";
    res.send(contact);
})

app.get("/about" , (req,res)=>{
    var info = "Name : Aviral , Job : Web Developer ";
    res.send(info);
})

app.listen(portNum , ()=>{
    console.log("the server has started , port number is "+ portNum);
});

// install nodemon as it autmatically stops and restarts the server whenver it detects a change in the file 