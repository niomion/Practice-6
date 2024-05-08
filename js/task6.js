$(document).ready(function(){
    $(".loading7").slideUp(200);
});

function Change(page) {
    $(".loading77").slideDown(200);
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

function checkForm() {
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if (email === "" || subject === "" || message === "") {
        alert("Please provide info!");
        return false; 
    }
    return true;
}