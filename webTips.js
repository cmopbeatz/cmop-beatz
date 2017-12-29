// JavaScript Document


$(document).ready(function(){
	
	var counter = 0;

	
	
	function showCaption(){
	
		counter++;
		console.log(counter);
		if(counter === 1){
			$('#caption1').show()
				$('#caption2').hide()
				$('#caption3').hide()
				$('#caption4').hide()
				$('#caption5').hide()
			$('#tips-body-bkg').attr('src','images/caption1.png');
			
			
			
			}else
			
			if(counter === 2){
				$('#caption1').hide()
				$('#caption2').show()
				$('#caption3').hide()
				$('#caption4').hide()
				$('#caption5').hide()
					$('#tips-body-bkg').attr('src','images/caption2.png');
				
				
				
				
			}else
			
			if(counter === 3){
			$('#caption1').hide()
				$('#caption2').hide()
				$('#caption3').show()
				$('#caption4').hide()
				$('#caption5').hide()
					$('#tips-body-bkg').attr('src','images/caption3.png');
				
				
				
				
				
			}else
			
			if(counter === 4){
				$('#caption1').hide()
				$('#caption2').hide()
				$('#caption3').hide()
				$('#caption4').show()
				$('#caption5').hide()
					$('#tips-body-bkg').attr('src','images/caption4.png');
				
				
				
				
			}else
			
			if(counter === 5){
				$('#caption1').hide()
				$('#caption2').hide()
				$('#caption3').hide()
				$('#caption4').hide()
				$('#caption5').show()
					$('#tips-body-bkg').attr('src','images/caption5.png');
						
				
				
			}
			
			
			
	};
	
	showCaption();
	
	setInterval(function(){
		showCaption();
	},10*1000);
	
		});
			
