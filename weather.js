var lat;
var long;
var locale;
var l; // = getWeather(locale);
var apiCall;
var lati = 35.0870163;
var longi = -80.6881609;
var apiKey = config.apiKey;

function weather(){
    //Create variables
    l = getWeather();
    var location = document.getElementById("location");
    var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
    var timezone = "America/Charlotte";
    apiCall = url + apiKey + lati + "," + longi;
    //apiCall = url + apiKey + l;
    console.log(apiCall);
    console.log(locale);
    $.getJSON(apiCall, function(forecast) {
        console.log(forecast);

        console.log( "Bogus --- " + forecast.timezone );
    });
}

function getWeather(locale) {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(lat);
            console.log(long);
            locale = lat + "," + long;
            console.log(locale);
        })
    } else {
            window.alert("Current location could not be determined.");
        }
        return(locale);
    };