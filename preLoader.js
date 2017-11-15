// JavaScript Document

//preLoader







$('.container').css('display','none');
$('#audio_player').css('display','none');

$(document).ready(function () {
	$('.container').css('display','none');
	$('#audio_player').css('display','none');
	$('#adPlacementHeader').css('display','none');
  	$('#Enter-page').attr("disabled",true);
		
		
    setTimeout(function () {
       
		$('#Enter-page').attr("disabled",false);
		$('#Enter-page').text("enter cmopbeatz.com");
		$('#loader-graphic').css('display','none');
    }, 15000);
	
	$('#Enter-page').click(function(){
		$('#PLwrapper').css('display','none');
		$('.container').css('display','block');
		$('#audio_player').css('display','block');		
		$('#adPlacementHeader').css('display','block');
		});

});



