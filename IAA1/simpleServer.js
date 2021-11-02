const API_KEY = "2851461c73782e2d4b65647c123fa135"
const POLLUTION_API_KEY = "6bf603bc2a5ef6d74967fcdac63cbe4c"
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const path = require("path");

let publicPath = path.resolve(__dirname)
app.use(express.static(publicPath))

app.get('/weather/:city', getWeather)
app.get('/forecast/:city',getForecast)
app.get('/temperature/:city',getTemperature)
app.get('/table/:city',getForecast)
app.get('/coords/:city',getCoordinates)
app.get('/pollution/:lat/:lon',getAirPollution)

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

async function getTemperature(req,res){
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${API_KEY}`)
    temperature = response.data.main.temp
    res.json({temperature})
}

async function getCoordinates(req,res){
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${API_KEY}`)
    coords = response.data.coord
    res.json({coords})
}

async function getAirPollution(req,res){
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${req.params.lat}&lon=${req.params.lon}&appid=${API_KEY}`)
    pollution = response.data.list
    res.json(pollution)
}







