$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    $('.name').text(nameInput);

    var addressInput = $("input#address").val();
    $('.address').text(addressInput);

    $('#receipt').show();


  });
});
