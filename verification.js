// JavaScript Document
var email;
var cFirst;
var cLast;
var iPane;
var whyLink;
var subArea;
var dLink;


//Object References//
email = document.getElementById('mailAddr');
cFirst = document.getElementById('firstN');
cLast = document.getElementById('lastN');
iPane = document.getElementById('intersititial');
whyLink = document.getElementById('whyEmail');
subArea = document.getElementById('submitButton');
dLink = document.getElementById('download-link');

function checkEmail() {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }else{
	sendMsg();
	 subArea.innerHTML = "Email submitted successfully."
	 dLink.style.display="";
	 dLink.style.opacity="1";
	 }
}


function sendMsg(){
	
}

function createMsg(){
	
}

function callInfo(){
whyLink.onclick = function(){
	

	}
}