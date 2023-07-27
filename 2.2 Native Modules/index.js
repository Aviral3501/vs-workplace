const fs = require("fs");// fs is short for file sysytem
fs.writeFile("message1.txt","Hello1 from node js",(err)=>{
    if(err) throw err;
    console.log("the file has been saved");
});
