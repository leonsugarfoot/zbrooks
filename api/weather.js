"use strict"

const url= "http://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=bbc8c6038d0959079810d33afbed349f";

$.ajax ({
    url: url,
    success: function(result){
        console.log(result);
        console.log(result.name);
        
        $("#location").text(result.name);
        
        
        let F = Math.round (result.main.temp * (9/5) - 459.67);
        let Fahrenheit = F.toString();
        $("#temperature").text(Fahrenheit);
        
        let windSpeed = Math.round(result.wind.speed/.44704);
        let wind = windSpeed.toString();
        $("#wind").text(wind);
        
        $("#sky").text(result.weather[0].description);
       
        
        
        
        
    }
    
    
})