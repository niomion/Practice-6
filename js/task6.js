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

