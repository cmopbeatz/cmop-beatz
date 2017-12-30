// JavaScript Documentvar 
$form = $('form#QCform'),
    url = 'https://script.google.com/macros/u/0/s/AKfycbx38hzZ70NhmWj09Y5M0IQGtPZRXb81pWwzhbsMZ-UoyirUrIER/exec'
	
	

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})

$('#submitBtn').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  });
    // do something
	
	swal({ 
  title: "Your Download is ready!",
   text: "Your download is waiting in another tab.",
    icon: "success" ,
	closeOnClickOutside: false,
	button:{ text: "Go!"}	
})

 
});