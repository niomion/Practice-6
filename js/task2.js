$(document).ready(function(){
    $(".loading3").slideUp(200);
});

function Change(page) {
    $(".loading33").slideDown(200);
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

function checkTruth(A,B,truth) {
    if ((!A && !B) === truth) {
        alert("Right Answer");
    }
    else {
        alert("Wrong Answer");
    }
}