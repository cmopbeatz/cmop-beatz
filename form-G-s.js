// JavaScript Document///

window.onload = loadProgress();



    


var mailBox,infoPop, whyE, ToS,ePanel,tPanelemailArea,gFormBtn,qcPanel,cmtPane,qcFBox,qcExpand,subArea,formView,eQCimg, qArea,scrDL;

//assign variables
scrDL = document.getElementById('dlSCR');
infoPop = document.getElementById('intersititial');
whyE = document.getElementById('whyEmail');
ToS = document.getElementById('Tos');
tPanel = document.getElementById('term-info');
ePanel = document.getElementById('email-info');
mailBox = document.getElementById('mail-dialog');
emailArea = document.getElementById('clientEmail');
gFormBtn = document.getElementById('formsub');
qcPanel = document.getElementById('qcArea');
expQC = document.getElementById('qcE');
cmtPane = document.getElementById('emailPanel');
qcFBox = document.getElementById('QCform');
qcExpand = document.getElementById('expQC');
subArea = document.getElementById('submitButton');

eQCimg = document.getElementById('expQCimg');
qArea = document.getElementById('commtBox');
yesBt = document.getElementById('yBtn');
noBt = document.getElementById('nBtn');

//submitform(s)///
gFormBtn.onclick = function(){
		if(qArea.value == "" && qcFBox.style.display == "block"){
		document.getElementById('cmmtError').style.display = "block";
		noBt.style.display = "block";
		yesBt.style.display = "block";
			}
	if(document.getElementById('cmmtError').style.display == "block"){
		return false;
	}else{
		checkFieldsTrue();
			
			}
}
		
		function verifyQField(){
		
		}
			function hideError(){

		document.getElementById('cmmtError').style.display = "none";
		}
		
		function confirmHideError(){

		document.getElementById('cmmtError').style.display = "none";
		qcPanel.style.width = "";
	qcFBox.style.display = "";
	cmtPane.style.opacity = "";
	cmtPane.style.display = "";
	qcExpand.style.right = "";
	qcFBox.style.opacity = "";
	eQCimg.src = "images/cmop-openactionbtn(rev).png";
				}
		
	scrDL.onclick = function (){

		
		window.scrollTo(0,800);
		
	
		
	}
		
			
qcExpand.onclick = function(){

	if(qcPanel.style.width ==""){
		
	qcPanel.style.width = "400px";
	qcFBox.style.opacity = "1";
	qcFBox.style.display = "block";
	cmtPane.style.opacity = "1";
	cmtPane.style.display = "block";
	qcExpand.style.right = "-210px";
	eQCimg.src = "images/cmop-openactionbtn.png";
	

}else{
	qcPanel.style.width = "";
	qcFBox.style.display = "";
	cmtPane.style.opacity = "";
	cmtPane.style.display = "";
	qcExpand.style.right = "";
	qcFBox.style.opacity = "";
	eQCimg.src = "images/cmop-openactionbtn(rev).png";
	
		}
}



function hideSubmit(){
	
	gFormBtn.style.display = "none";
	subArea.innerHTML = "Success!";
	subArea.style.color = "green";
	subArea.style.textBlur = "0px 0px 1px rgba(fff,fff,fff,.35);";
	
	}
//function loadProgress(){
//dltimer//
//var timeleft = 10;
//var downloadTimer = setInterval(function(){
  //document.getElementById("progressBar").value = 10 - --timeleft;
  //if(timeleft <= 0)
    //clearInterval(downloadTimer);

	//document.getElementById('dlBlocker').style.display = "block";

//document.getElementById('dlBlocker').style.height = "0px";

//},1000);

//}



function loadProgress(){
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0){
if(document.getElementById('countdowntimer').innerHTML == "0"){
	document.getElementById('cdTimer').style.display = "none";
	document.getElementById('dlBlocker').style.display = "block";
	document.getElementById('dlBlocker').style.height = "0px";


	}	
        clearInterval(downloadTimer);
	}
    },1000);

}

//expand infoPop
whyE.onclick = function(){
mailBox.focus;
	if(infoPop.style.height == "120px"){
		infoPop.style.height = "0px";
		ePanel.style.opacity = "0";
		ePanel.style.display = "none";	
		mailBox.style.height = "300px";
		mailBox.style.transitionDelay = ".5s";
		subArea.style.top ="-30px";
		}else{
	infoPop.style.height = "120px";
	tPanel.style.opacity = "0";
	tPanel.style.display = "none";
	ePanel.style.opacity = "1";
	ePanel.style.display = "block";	
	emailArea.style.height = "250px";
	mailBox.style.height = "450px";
			mailBox.style.transitionDelay = "-.02s";
				subArea.style.top ="20px";
		}
		if(ePanel.style.display == "none"){
			emailArea.style.height = "100px";
			
			}
			
}




Tos.onclick = function(){
mailBox.focus;
		if(infoPop.style.height == "150px"){
		infoPop.style.height = "0px";
		tPanel.style.opacity = "0";
		tPanel.style.display = "none";	
		mailBox.style.height = "300px";
		mailBox.style.transitionDelay = ".5s";
		subArea.style.top ="-30px";
		}else{
		infoPop.style.height = "150px";
	tPanel.style.opacity = "1";
	tPanel.style.display = "block";
	ePanel.style.opacity = "0";
	ePanel.style.display = "none";
	emailArea.style.height = "300px";
	mailBox.style.height = "500px";
				mailBox.style.transitionDelay = "-.02s";
				subArea.style.top ="20px";
				
		}
		if(tPanel.style.display == "none"){
			emailArea.style.height = "100px";
			}
}

//adjust mailBox height according to content//
function epandmBox(){
	mailBox.focus;
if(emailArea.style.height = "270px"){
	mailBox.style.height = "450px";
}else if(emailArea.style.height == "300px"){
	mailBox.style.height = "500px";
}else {mailBox.style.height = "300px";
	}
}