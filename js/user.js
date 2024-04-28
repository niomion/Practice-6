var userName;
var userLogin;
var userPassword;

$('#register').submit(function(event) {
    event.preventDefault();
    userName = $('#userUsername').val();
    userLogin = $('#userLoLogin').val();
    userPassword = $('#userPaPassword').val();
    $('#end').show();
});

$('#login').submit(function(event) {
    $("#wrong").hide();
    event.preventDefault();
    var checkLogin = $('#checkLogin').val();
    var checkPassword = $('#checkPassword').val();
    if ((userLogin != null && checkLogin.toLowerCase() === userLogin.toLowerCase()) 
    && (userPassword != null && checkPassword.toLowerCase() === userPassword.toLowerCase())) {
        $(".loading55").slideDown(200);
        setTimeout(function() {
            $.ajax({
                url: "user.html",
                dataType: "html",
                success: function(response) {
                    $("body").html(response);
                }
            });
        }, 200); 
    } else {
        $('#wrong').show();
    }
});

$(document).ready(function(){
    $("#greet").text("Welcome " + userName + ". Glad to see you here!")
});
