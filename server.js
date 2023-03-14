// jshint esversion:6
const express = require("express");

const app = express();  // Function that represents the Express module, and we bind that to the word app

// We need to specify what should happen when a browser gets in touch with our server and makes a get request

app.get("/", function(req, res){
  res.send("<h1>Hello World</h1>");
}); // req === request; res === response;

app.listen(3000, function(){
  console.log("Server started running on port 3000");
}); // this tells it to listen on a specific port
