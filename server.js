// jshint esversion:6
const express = require("express");

const app = express();  // Function that represents the Express module, and we bind that to the word app

// We need to specify what should happen when a browser gets in touch with our server and makes a get request

app.get("/", function(req, res){
  res.send("<h1>Hello World</h1>");
}); // req === request; res === response;
// this part: app.get("/") => specifies the route that we are going to respond to.
// We can respond to different routes;

app.get("/contact", function(req, res){
  res.send("Contact me at: filipaam@outlook.com");
});


//Exercise: Create a new route, so when you go to the About page of the website at local host, you are able to see a quick brief bio of who you are

app.get("/about", function(req, res){
  res.send("Hi everyone 👋🏼 <br>I’m @FilipaMerino and I used to be a neuropsychologist 🧠 Crazy, right? <br>I started learning code in my spare time, and I found it so enjoyable that I enrolled at Le Wagon Web Development Bootcamp to become a Full Stack or Front-end Developer 👩🏻‍💻.<br><br>I'm currently learning React 🎨");
});


app.get("/blog", function(req, res){
  res.send("<h1>THIS IS MY BLOG</h1>");
});


app.get("/hobbies", function(req, res){
  res.send("I love photography");
});

app.listen(3000, function(){
  console.log("Server started running on port 3000");
}); // this tells it to listen on a specific port
