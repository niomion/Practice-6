$(document).ready(function(){
    $(".loading5").slideUp(200);
});

function Change(page) {
    $(".loading55").slideDown(200);
    setTimeout(function() {
        $.ajax({
            url: page,
            dataType: "html",
            success: function(response) {
                $("body").html(response);
            }
        });
    }, 200);
};

function showLogin() {
    $("#menub").hide();
    $(".mainMenu").hide()
    $(".register").hide()
    $(".login").show()
}

function showRegister() {
    $("#menub").hide();
    $(".mainMenu").hide()
    $(".register").show()
    $(".login").hide()
}

function showMenu() {
    $("#wrong").hide();
    $("#end").hide()
    $("#menub").show();
    $(".mainMenu").show()
    $(".register").hide()
    $(".login").hide()
}