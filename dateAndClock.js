//Clock  function
function startTime(){
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
	var time = setTimeout(startTime, 500);
	//startDate();
}

//Add zero to single digits
function checkTime(i){
	if(i<10){
		i = "0" + i;
	}
	return i;	
}

//Add the appropriate syntax to the day
function nth(d) {
		if (d > 3 && d < 21) return 'th'; 
		switch (d % 10) {
		case 1:  return "st";
		case 2:  return "nd";
		case 3:  return "rd";
		default: return "th";
		}
}

//Return the date formatted for the mirror
function startDate(){
	var today = new Date();

	//Return day of the week in English
	var weekday = new Array(7);
	weekday[0] =  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var day = weekday[today.getDay()];
	var year = today.getFullYear();


	var month = new Array(12);
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var m = month[today.getMonth()];

	var dayOfWeek = today.getDate(); //Used for second reference to day of the week

	document.getElementById("date").innerHTML = day + ", " + m + " " + dayOfWeek + nth(dayOfWeek) + " " + year;
}