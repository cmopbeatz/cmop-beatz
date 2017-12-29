// JavaScript Document
var cFirst,cLast,cMail,cComm,qSelect,form,cQ1,cQ2,cQ3,cQ4;

cFirst = document.getElementById('fName');
cLast = document.getElementById('lName');
cMail = document.getElementById('email');
cComm = document.getElementById('commtBox');
qSelect = document.getElementById('selQ');
form = document.getElementById('QCform');

cQ1 = document.getElementById('q1');
cQ2 = document.getElementById('q2');
cQ3 = document.getElementById('q3');
cQ4 = document.getElementById('q4');

function checkEmail() {

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(cMail.value)) {
    alert('Please provide a valid email address');
    cMail.focus;
    return false;
 }else{
	  storeData();		
	  form.reset();
	 }
}


function sendMsg(){
	
}
function storeData(){
	
		var fName = encodeURIComponent(cFirst.value);
//		var lName = encodeURIComponent(cLast.value);
		var eMail = encodeURIComponent(cMail.value);
		var sList = qSelect.options[qSelect.selectedIndex].value;
			
				
	    var commt = encodeURIComponent(cComm.value);
		var q1 = encodeURIComponent(cQ1.value);
		var q2 = encodeURIComponent(cQ2.value);
		var q3 = encodeURIComponent(cQ3.value);
		var q4 = encodeURIComponent(cQ4.value);
		
		
		var fNameID = "entry.1176827416";
	//	var lNameID = "";
		var eMailID = "entry.1881461206";
		var sListID = "entry.477790267";
		var commtID = "entry.955611627";
		
		
		
		
		var baseURL ="https://docs.google.com/forms/d/e/1FAIpQLSeWHnOc5p0lbQW6Cv-pst79MqfkuyROb_KYEYUuw9K_1I_QTg/formResponse?";

		var refSubmit = '&8557032640741396769';
		var submitURL = (baseURL + fNameID + "=" + fName + "&" +  eMailID + "=" + eMail + "&" + sListID + "=" + sList + "&" + commtID + "=" + commt + refSubmit);
		console.log(submitURL);
		form.action = submitURL;

}