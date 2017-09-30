
//window.onload = function Cert-to-PDF{
var certificate, pdfDL, previewPDF;




function certScreen(){
	
	html2canvas(document.getElementById("CertForm"),{
		onrendered:function(canvas){
			var img = canvas.toDataURL('images/png');
			var doc = new jsPDF('landscape');
			doc.addHTML(certificate);
			doc.addImage(img, 'JPEG',20,20);
			doc.save('cmopL00');
			
	}
	});
}