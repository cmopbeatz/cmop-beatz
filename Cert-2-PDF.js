// Cert-to-PDF


function certScreen(){
	html2canvas(document.getElementById('CertForm'),{
		onrendered:function(cvs){
			
			var coaImg = new Image();
			
			var cvs = document.createElement('canvas');
			cvs.width = 800;
			cvs.height = 800;
			
			var dl = document.getElementById('dlPDF');
			dl.href = cvs.toDataURL('image/jpg');
			dl.download = 'cmop-L00.jpg';
			dl.click;
			
			var cvsTxt = cvs.getContext('2d');
			cvsTxt.drawImage(coaImg,0,0);
	
			coaImg.src = URL.createObjectURL(new blob);
					
			window.open(dl.href);
	}
	
	});
}

//function Cert2PDF(){
//html2canvas(document.getElementById('CertForm'), {
	
	//onrendered: function(canvas){
		//var img = canvas.toDataURL('image/jpeg');
		
		//var doc = new jsPDF();
		//doc.addImage(img, 'JPEG',20,20);
		//doc.save('coaL00.pdf');
	//}
//});
//}


		//$(function() { 

   // $("#dlPDF").click(function() { 

     //   html2canvas($("#CertForm"), {

       //     onrendered: function(canvas) {

         //     return Canvas2Image.saveAsPNG(canvas); 

                

      //      }

    //    });

  //  });

//}); 
//var pdfCanvas = document.getElementById('coaPreview');


	
	//$('#dlPDF').click(function() {
//var options = {};
  //var pdf = new jsPDF();

//pdf.addHTML($("#CertForm"), 15, 15, options, function() {
    //pdf.save('pageContent.pdf');
  //});
//});


//var element = document.querySelectorAll("CertForm")[0];
//options = {
    //onrendered: function(canvas) {
       //$('CertForm').append(canvas);
        //var imgstring = canvas.toDataURL();
        //$('.result').attr('src', imgstring);
    //}};
//html2canvas(element, options);


//}