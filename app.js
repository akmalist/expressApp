/*jshint esversion:6*/
const express = require("express");
const app =express();
const bodyParser = require("body-parser");
const ejs =require("ejs");
const request =require("request"); //api request
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

const friends = ["Alex", "Jane", "Jake", "Felix"];

app.get("/", function(req,res){
  res.render("home");
});

app.post("/addFriend",function(req,res){
const newFriend = req.body.newFriend;
friends.push(newFriend);

  // res.send("Holldada");
  res.redirect("friendsList");
});


app.get("/friendsList", function(req,res){
res.render("friends", {friends:friends}); //value on the left goes to ejs file value on the right goes to app.js
});


//api request test
// request("https://jsonplaceholder.typicode.com/todos/1",function(error, response, body){
//   if(!error && response.statusCode==200){
//     // console.log(error);
//     // console.log("smth went wrong");
//
//     const userData=JSON.parse(body);
//     console.log(userData.title);
//   }
// });



// request movie api for testing purposes
app.get("/movies", function(req, res){
      const search = req.query.search;
      const url = "http://www.omdbapi.com/?s="+ search+"&apikey=thewdb";
  request(url, function(err, response, body){
    if(!err && response.statusCode==200){
      const data=JSON.parse(body);
      res.render("movieResults", {data:data});
      // res.send(userData);
    }else if (err){
      res.render("OOOPS go back and search again");
    }
  });
});






// app.get("/", function(req,res){
//   res.send("Hi there, welcome to my assignment!");
// });
//
// app.get("/speak/:route",function(req,res){
//
//   console.log(Object.values(req.params));
//   if(Object.values(req.params)==="pig"){
//     res.send("The pig says 'Oink'!");
//   }else if(Object.values(req.params)==="cow"){
//     res.send("The cow says 'Moo'");
//   }else if(Object.values(req.params)==="dog"){
//     res.send("The dog says 'Woof Woof'");
//   }
// });
//
// app.get("/repeat/:link/:num", function(req,res){
//
//   function repeatMe(str , num){
//     str = req.params.link;
//     num = req.params.num;
//   if (num<1){
//     str =" ";
//   }else{
//     return (str+" ").repeat(num);
//   }
//
//   }
//   // console.log(req.params.link);
//   // console.log(req.params.num);
// res.send(repeatMe(" link ", +" num "));
//
// });
//
//
// app.get("*",function(req,res){
//   res.send("Sorry, page not found... What are you doing with your life?!");
// });


app.listen(3000,function(){
  console.log("App has launched in port 3000");
});
