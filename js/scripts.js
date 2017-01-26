$(document).ready(function() {
  $('#registration-submit').on('click', function() {
    var email = $('#email').val();

    var formFilled = true;
    if ($('#username').val() == '') {
      formFilled = false;
      $('#username-warning').show();
    }
    if ($('#password').val() == '') {
      formFilled = false;
      $('#password-warning').show();
    }
    if ($('#email').val() == '') {
      formFilled = false;
      $('#email-warning').show();
    }
    if (formFilled) {
      alert("Success!");
    }
  });
});
