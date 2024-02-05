$(function() {
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    })

    var pop = document.getElementById("pop-up");
    var btn = document.getElementById("btn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function () {
        pop.style.display = "block";
    }
    span.onclick = function () {
        pop.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == pop) {
            pop.style.display = "none";
        }
}

