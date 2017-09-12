// JavaScript Document

var $form = $('form#gform'),
    url = 'https://script.google.com/macros/s/AKfycbws48UD4rtbM7ct6iw3gpPDyRZVHh3qc2TdUpYTP_-DiDmYz8a5/exec'

$('#submitEmail').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  }).success(
    // do something
  );
})
