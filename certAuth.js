// JavaScript Document
window.onload = eDateTime;

var eDate, sTitle, sDuration, prodPic, prodLogo, certLast, certFirst, titleSold, closeDate;



//reference variables

sTitle = document.getElementById('song-Title');
sDuration = document.getElementById('s-Dur');
prodPic = document.getElementById('producer-Logo');
prodLogo = document.getElementById('producer-Logo');
certLast = document.getElementById('coaLast');
certFirst = document.getElementById('coaFirst');
titleSold = document.getElementById('purch-Title');
closeDate = document.getElementById('closing-Date');
refNum = document.getElementById('refID');

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

var mNum = ["01","02","03","04","05","06","07","08","09","10","11","12"];

var theDate = dNames[day] +","+ mNames[month] + date +","+ year;
closeDate.value = theDate;

//parse efDate:
var efDate =  theDate+"["+Time+"]";

var clock = setTimeout(eDateTime, 500);

document.getElementById('closing-Date').innerHTML = mNum[month]+"/"+date+"/"+year;

document.getElementById('as-Of').innerHTML = efDate;
} 

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genRefNum(){
	
var ref = new Date();
	var refDay = ref.getDay();
	var refDate = ref.getDate();
	var refMon = ref.getMonth();
	var refD = ["0001","0010","0100","0021","0210","1020","0201"];
	var refM = ["a101","a102","a103","a104","a105","a106","a107","a108","a109","a110","a111","a000"];


 var reference = document.getElementById('firstN').value + refD[refDay] + refM[refMon];
 

		 refNum.innerHTML = reference;
		 }




function storeCertNames (){
	certLast.innerHTML = document.getElementById('lastN').value;
	certFirst.innerHTML = document.getElementById('firstN').value;
	
	
	
	}	