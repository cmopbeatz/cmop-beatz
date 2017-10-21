// JavaScript Document

//preLoader







$('.container').css('display','none');


$(document).ready(function () {
	$('.container').css('display','none');
  
    setTimeout(function () {
       
		
		$('#Enter-page').text("enter cmopbeatz.com");
		$('#loader-graphic').css('display','none');
    }, 15000);
	
	$('#Enter-page').click(function(){
		$('#PLwrapper').css('display','none');
		//$('.container').css('display','block');		
		
		});

});

