const API_KEY = "2851461c73782e2d4b65647c123fa135"
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const path = require("path");

let publicPath = path.resolve(__dirname)
app.use(express.static(publicPath))

app.get('/weather/:city', getWeather)
app.get('/forecast/:city',getForecast)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

async function getWeather(req,res){
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${API_KEY}`)
    weather = response.data.weather[0]
    res.json({weather})
}

async function getForecast(req,res){
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&appid=${API_KEY}`)
    forecast = response.data
    res.json({forecast})
}


