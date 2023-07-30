import express from "express";
const app = express();
const port = 3000;

app.listen(port  , ()=> {
    console.log("Server running on the port "+port+" .");
});
// .. port is the location of our server where we are going to be listening for the requests from the client side 

 