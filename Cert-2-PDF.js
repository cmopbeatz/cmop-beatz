
// Cert-to-PDF
var certificate, pdfDL, previewPDF;

certificate = document.getElementById('CertForm');
pdfDL = document.getElementById('dlPDF');
previewPDF = document.getElementById('coaPreview');


function certScreen(){
	html2canvas(certificate, {
		onrendered:function(canvas){
			previewPDF.innerHTML = "";
			previewPDF.appendChild(canvas);
			
		}
	});
}


