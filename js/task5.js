$(document).ready(function(){
    $(".loading6").slideUp(200);
});

function Change(page) {
    $(".loading66").slideDown(200);
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

function ShowCalc(num) {
    if (num == 1) {
       $(".flex-container").hide();
       $(".calculator1").show();
    }
    else {
        $(".flex-container").css("display", "flex");
        $(".calculator1").hide();
    }
}

// calc1

function calcul() {
    let first = parseFloat($("#sfirst").val());
    let second = parseFloat($("#ssecond").val());
    if (isNaN(first) || isNaN(second)) {
        $("#sresult").val("Enter numbers into input!");
    } else {
        $("#sresult").val(first + second);
    };
}