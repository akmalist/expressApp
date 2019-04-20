/*jshint esversion:6*/
const express = require("express");
const app =express();


app.get("/", function(req,res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:route",function(req,res){

  console.log(Object.values(req.params));
  if(Object.values(req.params)==="pig"){
    res.send("The pig says 'Oink'!");
  }else if(Object.values(req.params)==="cow"){
    res.send("The cow says 'Moo'");
  }else if(Object.values(req.params)==="dog"){
    res.send("The dog says 'Woof Woof'");
  }
});

app.get("/repeat/:link/:num", function(req,res){

  function repeatMe(str , num){
    str = req.params.link;
    num = req.params.num;
  if (num<1){
    str =" ";
  }else{
    return (str+" ").repeat(num);
  }

  }
  // console.log(req.params.link);
  // console.log(req.params.num);
res.send(repeatMe(" link ", +" num "));

});


app.get("*",function(req,res){
  res.send("Sorry, page not found... What are you doing with your life?!");
});


app.listen(3000,function(){
  console.log("App has launched in port 3000");
});
