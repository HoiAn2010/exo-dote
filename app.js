require("dotenv").config();

const express = require('express');

const app = express();
const port = process.env.APP_PORT;
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;    


app.get('/', (req, res) => res.send('Hello Express !'))

app.listen(port, () =>
  console.log(`Hello, I am ${name}, wilder in ${city} and I love ${language}`)
);


