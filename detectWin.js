// JavaScript Document

//var txt = "";
//txt += "<p>innerWidth: " + window.innerWidth + "</p>";
//txt += "<p>innerHeight: " + window.innerHeight# + "</p>";
//txt += "<p>outerWidth: " + window.outerWidth + "</p>";
//txt += "<p>outerHeight: " + window.outerHeight + "</p>";

//document.getElementById("windowSize").innerHTML = txt;




$(document).ready(function () {
  //your code here$('#CMOP-siteTitle').css('width',340)


 
 
 	
//});



var w = $(window).width();



w < 1000 ? $('#HL-link').hide():$('#HL-link').show();
w < 1000 ? $('#HC-link').hide():$('#HC-link').show();
w < 1000 ? $('#HR-link').hide():$('#HR-link').show();
w < 800 ? $('#CMOP-title').hide():$('#CMOP-title').show();

w < 510 ?  $('#cmopbeatz').css('display','none') : $('#cmopbeatz').css('display','block');
w < 501 ? $('#clock-toggle').css('display', 'none') : $('#clock-toggle').css('display', 'block');



$(window).resize(function(){



var w = $(window).width();



w < 1000 ? $('#HL-link').hide():$('#HL-link').show();
w < 1000 ? $('#HC-link').hide():$('#HC-link').show();
w < 1000 ? $('#HR-link').hide():$('#HR-link').show();
w < 800 ? $('#CMOP-title').hide():$('#CMOP-title').show();

w < 510 ?  $('#cmopbeatz').css('display','none') : $('#cmopbeatz').css('display','block');

w < 501 ? $('#audio_player').css('display', 'none') : $('#audio_layer').css('display', 'block');
 w <= 500 ? $('.okBtn').css('display', 'none'):$('.okBtn').css('display', 'none');

w <= 500 ? $('#siteBlocker').css('display','block'): $('#siteBlocker').css('display','none');



if(w <= 500){


swal({ 
  title: "Page width too small!",
   text: "cmopbeatz.com has detected that your page width is too small to view site content correctly. Please resize to a higher width.",
    icon: "warning" ,
	closeOnClickOutside: false,
	button: false
		
	  
			});
					 
	
	
	
	
}else{
	swal.closeModal();
	
	}

});
});

