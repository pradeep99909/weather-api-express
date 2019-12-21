var express = require('express')
var bodyParser=require('body-parser')
var app = express()
var path = require('path')
var add=require('./function/add')
const request = require('request');
const key = require('./function/key/key');
var geocoder = require('geocoder');
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')))

// app.get('/',(req,res)=>{
//     res.sendFile('index.html')
// })

app.post('/login',(req,res)=>{
    res.send(add(req.body.a,req.body.b))
})

app.get('/weather',(req,res)=>{
    res.sendFile('weather.html')
})

app.post('/getweather',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    request(`https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`,function(err, response, body){
        if(err){
            res.send(err)
        }
        else{
            let weather = JSON.parse(body)
            res.send({temp:Math.ceil(weather.main.temp/10),city:weather.name})
        }
        
    })
})

app.post('/getcity',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    request(`https://api.openweathermap.org/data/2.5/weather?lat=${req.body.lat}&lon=${req.body.long}&appid=${key}`,function(err, response, body){
        if(err){
            console.log(err)
        }
        else{
            let weather = JSON.parse(body)
            res.send({city:weather.name,temp:Math.ceil(weather.main.temp/10)})
        }
        
    })
})

app.listen(8000)