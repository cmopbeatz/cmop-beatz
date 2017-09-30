
//window.onload = function Cert-to-PDF{
var certificate, pdfDL, previewPDF;




function certScreen(){
	
	
var certificate = document.getElementById('CertForm');
var pdfDL = document.getElementById('dlPDF');
previewPDF = document.getElementById('coaPreview');	
	
	html2canvas(document.getElementById('CertForm'),{
		onrendered: function(canvas){
		const imgDataURL = canvas.toDataURL('image/png')
	var doc = new jsPDF('landscape','px','a4');
	doc.addImage(imgDataURL, 'PNG',20,20);
	doc.save('cmopL00.pdf');
		}
	});
		
	
	
	
	
	//var getImg = function(url, callback){
		
		//img = new Image();
		//img.onload = function(){
			//callback(img);
		//};
		//img.src = url;
	//}
	
	//var margin = {top:20,left:5,right:5,bottom:0};
	
	
	
//var doc = new jsPDF('landscape','px','a4');
	//var pdfW;
//	var pdfH; 
	
	//pdfW = document.getElementById('CertForm').style.width;
//	pdfH = document.getElementById('CertForm').style.height;
	
	
	//doc.addImage(imgDataURL, 'PNG',10,10);
//	doc.fromHTML($('#CertForm').get(0),20,20,{
	//	'width':pdfW,'height':pdfH}, function (){ doc.save("cmopL00.pdf");
		
//	}, margin);
			
}
		
	  
	



	//}
	//}