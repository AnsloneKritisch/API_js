
const express = require('express')
const app = express()
const port = 3000

const https = require("https")


app.get('/', function(req, res) 
{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=cc7a3c46b58f78e25e6e865a516ed1a6&units=metric#";
    https.get(url, function(response)
    {
        console.log(response.statusCode);

        response.on("data", function(data)
        {
          // if we use this we will get a hexadecimal output of our data 
          // we can convert the data and see the output at https://cryptii.com/pipes/hex-decoder 
          console.log(data);
          // now we have to convert the data into a npm string format -> then turn into actual js data format
          const weatherData = JSON.parse(data);
          console.log(weatherData);
          const temp =  weatherData.main.temp;
        })




    })

  res.send("Server is up and running!")
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})