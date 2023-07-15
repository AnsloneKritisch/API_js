
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

const https = require("https")

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {

  res.sendFile(__dirname + "/index.html");

});

app.post('/', function (req, res) {



  // console.log(req.body.cityName);
  // console.log("Post Request Received"); 
  const query = req.body.cityName;
  const apiKey = "cc7a3c46b58f78e25e6e865a516ed1a6";
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit + "#";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) 
    {

      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      console.log(temp);
      const weather_description = weatherData.weather[0].description;
      console.log(weather_description);

      res.write("<h1> The weather in "+ query +" is " + weather_description + "</h1>");

      res.write("<h1> the temperature is " + temp + " degree celsius");

      const icon = weatherData.weather[0].icon;
      const img_url = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<img src=" + img_url + ">");
      res.send();



    });

  });




});


// app.get('/', function(req, res) 
// {
//     const query = "Delhi" ;
//     const apiKey = "cc7a3c46b58f78e25e6e865a516ed1a6";
//     const unit = "metric"
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit + "#";
//     https.get(url, function(response)
//     {
//         console.log(response.statusCode);

//         response.on("data", function(data)
//         {


//           // if we use this we will get a hexadecimal output of our data 
//           // we can convert the data and see the output at https://cryptii.com/pipes/hex-decoder 
//           console.log(data);
//           // now we have to convert the data into a npm string format -> then turn into actual js data format
//           const weatherData = JSON.parse(data);
//           console.log(weatherData);
//           const temp =  weatherData.main.temp;
//           console.log(temp);
//           const weather_description =  weatherData.weather[0].description;
//           console.log(weather_description);




//           // as we know that we can send only one resposnse at a time so instead of using res.send we will use res.write 

//           // res.send("<h1> The weather is " + weather_description + " and the temperature is " + temp + " degree celsius");

//           // as we know that we can send only one resposnse at a time so instead of using res.send we will use res.write 

//           res.write("<h1> The weather is " + weather_description +"</h1>" );

//           res.write("<h1> the temperature is " + temp + " degree celsius");

//           const icon = weatherData.weather[0].icon;
//           const img_url = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

//           res.write("<img src=" + img_url + ">");




//           res.send();



//         })




//     })

// as i am going too add res send of temprature so i am commenting it out 

// res.send("Server is up and running!")



// })

app.listen(port, () => {

  console.log(`Example app listening on port localhost:${port}`)

})
