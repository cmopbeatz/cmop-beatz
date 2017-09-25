// JavaScript Document
var email;
var cFirst;
var cLast;
var iPane;
var whyLink;
var subArea;
var dLink;
var form;
var eConfirm;


//Object References//
email = document.getElementById('mailAddr');
eConfirm = document.getElementById('validateMail');

cFirst = document.getElementById('firstN');
cLast = document.getElementById('lastN');
iPane = document.getElementById('intersititial');
whyLink = document.getElementById('whyEmail');

dLink = document.getElementById('linkArea');
form = document.getElementById('gform');


function verifyEmail() {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
			document.getElementById('e-mail').style.color = "red";
			document.getElementById('badEmail').style.display = "block";
			document.getElementById('badEmail').innerHTML ="Please enter a valid email address.";
			document.getElementById('error-prompt').style.display="block";
		
		
		
		if(email.value==""){
			
			document.getElementById('e-mail').style.color = "red";
			document.getElementById('badEmail').style.display = "block";
			document.getElementById('badEmail').innerHTML ="Please enter an email address.";
			document.getElementById('error-prompt').style.display="block";
		
			}
	

    email.focus;
    return false;
 }else{
	  collectData();		
	 

	 }
}



//check FALSE for Fname & email & eConfirm//
function verifyEmailFields(){
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
				document.getElementById('e-mail').style.color = "red";
	document.getElementById('error-prompt').style.display = "block";
		document.getElementById('badEmail').style.display = "block";
		
		document.getElementById('badEmail').innerHTML ="Please enter a valid email address.";
		
	}
}

function isEmailBlank(){
		if(email.value==""){
					document.getElementById('e-mail').style.color = "red";
						document.getElementById('error-prompt').style.display = "block";
		document.getElementById('badEmail').style.display = "block";
	
			document.getElementById('badEmail').innerHTML ="Please enter an email address.";
					
		}
}

function isemailEqualcEmail(){
			if(email.value != eConfirm.value){
						document.getElementById('e-mail').style.color = "red";
							document.getElementById('error-prompt').style.display = "block";
		document.getElementById('badEmail').style.display = "block";
		
				document.getElementById('badEmail').innerHTML ="Email addresses do not match.";
						
			}
}

function iscEmailBlank(){
				if(eConfirm.value == ""){
						document.getElementById('error-prompt').style.display = "block";
		document.getElementById('e-mail').style.color = "red";
		document.getElementById('badEmail').style.display = "block";
		document.getElementById('badEmail').innerHTML ="Please re-enter email address.";	
												
				}
}

function isFnameBlank(){
					if(cFirst.value == ""){	
						document.getElementById('error-prompt').style.display = "block";
							document.getElementById('fname').style.color = "red";
		
		document.getElementById('badName').style.display = "block";
							document.getElementById('badName').innerHTML ="Please enter a first name.";
					}
					
}
		
		//verify TRUE for Fname & email & eConfirm//
		function checkFieldsTrue(){
			 if(cFirst.value != "" && email.value === eConfirm.value){
				 if(email.value != "" && eConfirm.value != ""){
 		document.getElementById('error-prompt').style.display = "none";
		document.getElementById('badEmail').style.display="none";
		document.getElementById('badName').style.display = "block";
			 collectData();	
		 storeData();
			}
			
	}
		}

		
function checkFNameTrue(){
 if(cFirst.value != ""){
	document.getElementById('badName').style.display="none";
	document.getElementById('error-prompt').style.display="none";
	}
}
  



function checkFNameFalse(){
	
if(cFirst.value == ""){
	document.getElementById('fname').style.color = "red";
	document.getElementById('badName').style.display="block";
	document.getElementById('error-prompt').style.display="block";
	document.getElementById('badName').innerHTML ="Please enter a first name.";
	return false;
}
	}

function collectData(){
	
		var fName = encodeURIComponent(cFirst.value);
		var lName = encodeURIComponent(cLast.value);
		var eMail = encodeURIComponent(email.value);
		var fNameID = "entry.1482429792";
		var lNameID = "entry.1608405284";
		var eMailID = "entry.1796909959";
		var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeIvKp5s1l0nw--bQIx72unFSw7HsaJCfU7hId9_2iwlRXc5w/formResponse?";

		var refSubmit = '&submit=4147383761881142935';
		var submitURL = (baseURL + fNameID + "=" + fName + "&" + lNameID + "=" + lName + "&" + eMailID + "=" + eMail + refSubmit);
		console.log(submitURL);
		form.action = submitURL;

}