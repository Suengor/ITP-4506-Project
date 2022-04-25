// FIlter anything
$(document).ready(function () {
  $("#anythingSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$(document).ready(function () {
  $('.pass_show').append('<span class="ptxt">Show</span>');
});


$(document).on('click', '.pass_show .ptxt', function () {

  $(this).text($(this).text() == "Show" ? "Hide" : "Show");

  $(this).prev().attr('type', function (index, attr) {
    return attr == 'password' ? 'text' : 'password';
  });

});

$(document).ready(function () {

  const $valueSpan = $('.valueSpan2');
  const $value = $('#customRange11');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});

$(document).ready(function () {

  const $valueSpan = $('.valueSpan1');
  const $value = $('#customRange12');
  $valueSpan.html($value.val());
  $value.on('input change', () => {

    $valueSpan.html($value.val());
  });
});
