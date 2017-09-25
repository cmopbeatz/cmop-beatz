// JavaScript Document
window.onload = eDateTime;

var eDate, sTitle, sDuration, prodPic, prodLogo, certLast, certFirst, titleSold, closeDate;



//reference variables

sTitle = document.getElementById('st');
sDuration = document.getElementById('sd');
prodPic = document.getElementById('producerPhoto');
prodLogo = document.getElementById('producerName');
certLast = document.getElementById('coaLast');
certFirst = document.getElementById('coaFirst');
titleSold = document.getElementById('songSold');
closeDate = document.getElementById('saleDate');

//set clock to efDate
function eDateTime(){
	
var d = new Date();	

//Time
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

minutes = checkTime(minutes);
seconds = checkTime(seconds);
 

//parse Time
var Time = hours +":"+ minutes +":"+ seconds;

//Date
var day = d.getDay();
var month = d.getMonth();
var date = d.getDate();
var year = d.getFullYear();

var dNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

var mNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var theDate = dNames[day] +","+ mNames[month] + date +","+ year;
closeDate.value = theDate;

//parse efDate:
var efDate =  theDate+"["+Time+"]";

var clock = setTimeout(eDateTime, 500);

document.getElementById('efDate').value = efDate;
} 

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.getElementById('formsub').onclick = function(){
	certLast.value = document.getElementById('lastN').value;
	certFirst.value = document.getElementById('firstN').value;
	
	
	
	}	