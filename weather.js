function weather(){
	//Create variables
	var location = document.getElementById("location");
	var apiKey = config;
	var url = "https://api.darksky.net/forecast/";
	var timezone = "America/New York";
	getWeather();
}

var getWeather = function() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        //showWeather(lat, long)
        console.log(lat);
        console.log(long);
      })
    } else {
            window.alert("Current location could not be determined.");
      }
  }












/*//Create variables
var location = document.getElementById("location");
var apiKey = config;
var url = "https://api.darksky.net/forecast/";
var timezone = "America/New York";

var geolocation{};
if (navigator.geolocation){
	navogator.geolocation.getCurrentPosition(success,error):
} else {
	alert("Your browser does not support Geolocation!!");
}

function error() {
 	location.innerHTML = "Unable to retrieve your location";
}

function success(position) {
	geolocation.latitude = position.coords.latitude;
	geolocation.longitude = position.coords.longitude;

	location.innerHTML =
  		"Latitude is " + latitude + "° Longitude is " + longitude + "°";
}*/

/*function weather() {
	var location = document.getElementById("location");
  	var apiKey = config;
  	var url = "https://api.darksky.net/forecast/";
  	var timezone = "America/New York";

  	navigator.geolocation.getCurrentPosition(success, error);

  	function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    location.innerHTML =
      	"Latitude is " + latitude + "° Longitude is " + longitude + "°";

    $.getJSON(
      	url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
      	function(data) {
        	$(".temp").html(data.currently.temperature + "° F");
       	 	$(".minutely").html(data.minutely.summary);
      	}
    );
  	}

  	function error() {
    	location.innerHTML = "Unable to retrieve your location";
  	}

  	location.innerHTML = "Locating...";
}*/