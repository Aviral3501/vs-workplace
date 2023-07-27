const fs = require("fs");// fs is short for file sysytem
fs.readFile("./message.txt","utf8", (err , data)=>{
    if (err) throw err;
    console.log(data);
});
// reason we added "utf8" is because if we read the file then we get default encoded form. hence we apply encoding  "utf8" to the file to read it