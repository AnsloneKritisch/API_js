const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) 
{
  
  res.sendFile(__dirname+ "/signup.html");

});

app.listen(port, function()
{

  console.log(`Example app listening on port localhost:${port}`)

})