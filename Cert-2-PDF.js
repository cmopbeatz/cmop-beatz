
// Cert-to-PDF
var certificate, pdfDL, previewPDF;

certificate = document.getElementById('CertForm');
pdfDL = document.getElementById('dlPDF');
previewPDF = document.getElementById('coaPreview');


function certScreen(){
	
	
	var getImg = function(url, callback){
		
		img = new Image();
		img.onload = function(){
			callback(img);
		};
		img.src = url;
	}
	
	
	
	
	var margin = {top:20,left:5,right:5,bottom:0};
	
	
	
	var doc = new jsPDF('landscape');
	
	doc.fromHTML($('#CertForm').get(0),20,20,{
		'width':850,'height':450}, function (renderCall){ doc.save("cmopL00.pdf");
		
	}, margin);
}
		
	  
	




