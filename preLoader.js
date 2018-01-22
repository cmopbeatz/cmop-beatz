// Pre-Loader









$('.container').css('display','none');
$('#audio_player').css('display','none');

$(document).ready(function () {
	$('.container').css('display','none');
	$('#audio_player').css('display','none');
	$('#adPlacementHeader').css('display','none');
	$('#adPlacementFooter').css('display','none');
  	$('#Enter-page').attr("disabled",true);
	$('#policies').css('display','none');
	$('#cookies').css('opacity','0');
	$('#cookies').css('display','none');
		
		
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
		$('#adPlacementFooter').css('display','block');
			$('#policies').css('display','block');
			$('#cookies').css('opacity','1');
		
		$('#cookies').css('display','block');
			window.scrollTo(0, 0);
		
		 
		
		});
	

$('#gotit').click(function(){
	
	$('#cookies').css('opacity','0');
	
	});

});


