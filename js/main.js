$(document).ready(function(){
    $(".loadingm").slideUp(200);
});

function Change(page) {
    $(".loading").slideDown(200);
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

$("#easter").dblclick(() => {
    $(".blackscreen").css("background-color", "black");
    $("#screamer").css("width", "10px");
    $("#screamer").css("opacity", "0");
    $("#egg").trigger("play");
    $(".blackscreen").css("display", "flex");
    $(".egg").css("height", "50px");
    recursiveFunction(1);
});

function recursiveFunction(count) {
    if (count <= 17) {
        let opacity = 0;
        let currentSize = parseInt($("#screamer").css("width"));
        $("#screamer").css("width", currentSize + 10 + "px");
        $("#screamer").css("opacity", opacity + 0.1);
        setTimeout(function() {
            recursiveFunction(count + 1);
        }, 1000);
    } else {
        $(".blackscreen").css("background-color", "red");
        $("#screamer").css("width", "950px");
        $("#screamer").css("opacity", "1");
        $("#egg2").trigger("play");
        setTimeout(function() {
            $(".blackscreen").hide();
        }, 1500);
    }
}