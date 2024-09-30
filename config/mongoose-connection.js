const mongoose = require('mongoose');
const config = require("config");

const dbgr = require("debug")("development:mongoose");

mongoose
.connect(`${config.get("MONGODB_URI")}/mybagweb`)
.then(function(){
    dbgr("connected"); //comand to set environment variable is ($env:DEBUG="development:*"
                       // i have set the environment variable to development with the help of $env:NODE_ENV="development" this code. 
})
 
.catch(function(err){
    console.log(err);  // This will catch and log any connection error
});
console.log(process.env.NODE_ENV);
