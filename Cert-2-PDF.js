// Cert-to-PDF


function certScreen(){
	
	//GrabzIt("ZjczYWY0MDVlZWMzNDMwNDlhMDRlZTg2YjNlZmJhNTA=").ConvertURL("https://cmopbeatz.github.io/cmop-beatz/verify.html",
//{"target": "#CertForm", "bheight": -1, "height": -1, "width": -1}).Create();
	
	
	//html2canvas(document.getElementById('CertForm'),{
		//onrendered:function(cvs){
	//		
//			//var coaImg = new Image();
			
			//var cvs = document.createElement('canvas');
			//cvs.width = 800;
			//cvs.height = 800;
			
			//var dl = document.getElementById('dlPDF');
			//dl.href = cvs.toDataURL('image/jpg');
			//dl.download = 'cmop-L00.jpg';
			//dl.click;
			
			//var cvsTxt = cvs.getContext('2d');
			//cvsTxt.drawImage(coaImg,0,0);
	
			//coaImg.src = URL.createObjectURL();
					
			//window.open(dl.href);
	//}
	
	//});
//}

//function Cert2PDF(){
html2canvas(document.getElementById('CertForm'), {
	
	onrendered: function(canvas){
		var img = canvas.toDataURL('image/jpeg', 1.0);
		
		var doc = new jsPDF("landscape");
		doc.addImage(img, 'JPEG',10,10,11.5,8.5);//w:1100px-h:435px;
		window.open(img);
	 doc.save('coaL00.pdf');
	}
});
//}


		//$(function() { 

//   $("#dlPDF").click(function() { 

  //      html2canvas($("#CertForm"), {

    //       onrendered: function(canvas) {

      //        return Canvas2Image.saveAsPNG(canvas); 

                

        //   }

//        });

  //  });

//}); 
//var pdfCanvas = document.getElementById('coaPreview');


	
	//$('#dlPDF').click(function() {
//var options = {};
  //var pdf = new jsPDF();

//pdf.addHTML($("#CertForm"), 15, 15, options, function() {
    //pdf.save('pageContent.pdf');
//  });
//});


//var element = document.querySelectorAll("CertForm")[0];
//options = {
  //  onrendered: function(canvas) {
    //   $('CertForm').append(canvas);
      //  var imgstring = canvas.toDataURL();
        //$('.result').attr('src', imgstring);
//    }};
//html2canvas(element, options);

//var pdf = new jsPDF('l', 'pt', 'a4');
 //var options = {
   // pagesplit: true
//};

//pdf.addHTML($('body'), 0, 0, options, function(){
  //  pdf.save("test.pdf");
//});



}