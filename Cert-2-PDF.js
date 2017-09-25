// Cert-to-PDF

function Cert2PDF(){
html2canvas(document.body, {
	
	onrendered: function(canvas){
		var img = canvas.toDataURL('image/png');
		var doc = new jsPDF();
		doc.addImage(img, 'JPEG',20,20);
		doc.save('coaL00.pdf');
	}
});




//var pdfCanvas = document.getElementById('coaPreview');


	
//	$('#dlPDF').click(function() {
  //var options = {};
//  var pdf = new jsPDF();

  //pdf.addHTML($("#CertForm"), 15, 15, options, function() {
    //pdf.save('pageContent.pdf');
//  });
//});


//var element = document.querySelectorAll("CertForm")[0];
//options = {
  //  onrendered: function(canvas) {
       //$('CertForm').append(canvas);
    //    var imgstring = canvas.toDataURL();
      //  $('.result').attr('src', imgstring);
   // }};
//html2canvas(element, options);

}
