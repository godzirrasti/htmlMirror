var apiCall;
var apiKey = apiConfig.apiKey;
var lat = apiConfig.lat;
var long = apiConfig.long;

function weather(){
    var location = document.getElementById("location");
    var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
    var timezone = "America/Charlotte";
    apiCall = url + apiKey + lat + "," + long;
    $.getJSON(apiCall, function(forecast) {
        console.log(forecast);
    });
}