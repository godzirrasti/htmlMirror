var apiCall;
var lati = 35.0870163;
var longi = -80.6881609;
var apiKey = config.apiKey;

function weather(){
    var location = document.getElementById("location");
    var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
    var timezone = "America/Charlotte";
    apiCall = url + apiKey + lati + "," + longi;
    $.getJSON(apiCall, function(forecast) {
        console.log(forecast);
    });
}