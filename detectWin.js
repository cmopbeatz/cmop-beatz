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

$(window).width() < 710 ? $("#CMOP-title").width(0):$("#CMOP-title").width(280);	

$(window).width() < 710 ? $("#CMOP-title").hide():$("#CMOP-title").show();	

$(window).width() < 710 ? $("#cmopbeatz").width(0):$("#cmopbeatz").width(280);

$(window).width() < 710 ? $("#cmopbeatz").show():$("#cmopbeatz").show();	

//$(window).width() < 545 ? $('.container').hide():$('.container').show();	


	




$(window).resize(function(){

	var w = $(window).width();
 $('.container').css('width',w - 10);


$(window).width() < 710 ? $("#CMOP-title").width(0):$("#CMOP-title").width(280);	

$(window).width() < 710 ? $("#CMOP-title").hide():$("#CMOP-title").show();	

$(window).width() < 710 ? $("#cmopbeatz").width(0):$("#cmopbeatz").width(280);

$(window).width() < 710 ? $("#cmopbeatz").show():$("#cmopbeatz").show();	

//$(window).width() < 545 ? $('.container').hide():$('.container').show();	

});
});