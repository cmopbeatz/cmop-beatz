// JavaScript Document

//var txt = "";
//txt += "<p>innerWidth: " + window.innerWidth + "</p>";
//txt += "<p>innerHeight: " + window.innerHeight + "</p>";
//txt += "<p>outerWidth: " + window.outerWidth + "</p>";
//txt += "<p>outerHeight: " + window.outerHeight + "</p>";

//document.getElementById("windowSize").innerHTML = txt;




$(document).ready(function () {
  //your code here


 
 
 	
//});	

var w = $(window).width();
 $('.container').css('width',w - 10);

$(window).width() < 710 ? $("#CMOP-title").css('width','0px'):$("#CMOP-title").css('width','280px');	

$(window).width() < 710 ? $("#CMOP-title").hide():$("#CMOP-title").show();	

$(window).width() < 710 ? $("#cmopbeatz").width(0):$("#cmopbeatz").width(280);

$(window).width() < 710 ? $("#cmopbeatz").show():$("#cmopbeatz").show();	

$(window).width() < 710 ? $('#actionContainer').css('margin-top','325px'): $('#actionContainer').css('margin-top','325px')

$(window).width() < 545 ? $('#actionContainer').css('position','absolute'):$('#actionContainer').css('position','relative');	

$(window).width() < 710 ? $('#statusContainer').css('float','left'):$('#statusContainer').css('float','right');	

$(window).width() < 512 ? $('#CMOP-logo').hide():$('#CMOP-logo').show();





$(window).resize(function(){

	var w = $(window).width();
 $('.container').css('width',w - 10);

$(window).width() < 710 ? $("#CMOP-title").css('width','0px'):$("#CMOP-title").css('width','280px');	

$(window).width() < 710 ? $("#CMOP-title").hide():$("#CMOP-title").show();	

$(window).width() < 710 ? $("#cmopbeatz").width(0):$("#cmopbeatz").width(280);

$(window).width() < 710 ? $("#cmopbeatz").show():$("#cmopbeatz").show();	

$(window).width() < 710 ? $('#actionContainer').css('margin-top','325px'): $('#actionContainer').css('margin-top','325px')

$(window).width() < 545 ? $('#actionContainer').css('position','absolute'):$('#actionContainer').css('position','relative');	

$(window).width() < 710 ? $('#statusContainer').css('float','right'):$('#statusContainer').css('float','right');	

$(window).width() < 512 ? $('#CMOP-logo').hide():$('#CMOP-logo').show();

});
});