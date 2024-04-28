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

function calculateFunction(x) {
    if (x < 4) {
        return x**2 + Math.exp(x);
    } else if (x == 4) {
        return x + 2;
    } else {
        return Math.sin(x)**2 + Math.log(x);
    }
}

function computeFunction() {
    let i1 = 1;
    let start = parseFloat(prompt("Enter a start value"));
    let end = parseFloat(prompt("Enter a end value"));
    let step = parseFloat(prompt("Enter a step value"));
    $("h1").text("Start: " + start + " End: " + end + " Step: " + step);
    let containerDiv = document.createElement('div');
    for (;start <= end; start += step) {
        let result = calculateFunction(start);
        containerDiv.innerHTML += "<p>" + i1++ + ") Result: " + result + "</p>";
    }
    document.body.appendChild(containerDiv);
}