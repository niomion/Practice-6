$(document).ready(function(){
    $(".loading4").slideUp(200);

});

function Change(page) {
    $(".loading44").slideDown(200);
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

function checkAnswer(answer) {
    $(".check").show();
    $("#check").trigger("play");
    setTimeout(() => {
        switch (answer) {
            case 1:
            case 2:
                $("#wrong").trigger("play");
                $(".check").css("color", "red");
                $(".check").text("Wrong answer!");
                break;
            case 3:
                $("#victory").trigger("play");
                $(".check").css("color", "chartreuse");
                $(".check").text("Correct answer!");
                break;
            default:
                break;
        }
    }, 1500);
    setTimeout(() => {
        $(".check").css("color", "orange");
        $(".check").text("Checking...");
        $(".check").hide();
    }, 4000);
}