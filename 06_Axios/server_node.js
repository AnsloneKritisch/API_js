const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000 ;



app.get('/', (req, res) => {

    const apiUrl = 'https://api.kanye.rest/';

    axios.get(apiUrl)
        .then((response) => {
        
            console.log('Data fetched successfully:', response.data);

            const todayQuote = response.data.quote;

            res.send(todayQuote);

        })

        .catch(error => {

            console.error('Error fetching data:', error);

          });

    // res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

