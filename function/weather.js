const request = require('request');
const key = require('./key/key');

function getweather(city){
    request(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${key}`,function(err, response, body){
        
    })
};

module.exports = getweather