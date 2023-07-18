

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const port = 3000
//  after doing it we realised that the server does not take the css static file so we are creating folder and adding all our css and images at a different folder and addind it here

app.use(express.static("public"));

app.get('/', function(req, res) 
{
  
  res.sendFile(__dirname+ "/signup.html");

});

app.listen(port, function()
{

  console.log(`Example app listening on port localhost:${port}`)

})
