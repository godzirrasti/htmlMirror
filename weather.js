var lat;
var long;
var locale;
var apiCall;

function weather(){
	//Create variables
	var location = document.getElementById("location");
	var apiKey = config;
	var url = "https://api.darksky.net/forecast/";
	var timezone = "America/New York";
	getWeather();
    apiCall = url + apiKey + locale;
    $.getJSON(apiCall, function(forecast) {
    console.log(forecast);
});

}

function getWeather() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        lat = position.coords.latitude;
        long = position.coords.longitude;
        //showWeather(lat, long)
        console.log(lat);
        console.log(long);
        locale = "[" + lat + "]" + "," + "[" + long + "]";
        console.log(locale);
        
      })
    } else {
            window.alert("Current location could not be determined.");
      }
  }