<!-- Time Tracker Code start -->
	time = new Date();
	var month = new Array();
	months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	var month = months[time.getMonth()];
	var day = time.getDate();
	var year = time.getFullYear();
	var date = month + "/" + day + "/" + year;
	document.write("<h4>Welcome, today's date is: " + date + ".</h4>");
<!-- Time Tracker Code end -->
<!-- Link code start -->
	function link() {
		window.open('https://haiweisuta.000webhostapp.com/schedule.html', '_self');
	}
<!-- Link code end -->
