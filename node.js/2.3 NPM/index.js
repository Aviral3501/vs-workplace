// var generateName = require("sillyname");
// var sillyName = generateName();
//this method is by using CJS (common js )

// another way of doing it is by using ESM (ecma script modules)

import generateName from "sillyname";
var sillyName = generateName();

// console.log("My name is "+ sillyName+"." );
console.log(`My name is ${sillyName}.`);