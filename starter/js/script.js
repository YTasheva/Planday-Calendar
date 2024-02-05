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

$(function() {
    $(.deleteBtn).on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.removeItem(time, value);
        $(this).siblings(".description").val("");
    });
});

var currentHour = dayjs().hour();
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");
var deleteBtn = $(".deleteBtn");
var hour = $(".hour");
var description = $(".description");
var time = $(".time");
var currentDay = $("#currentDay");
var currentTime = $("#currentTime");


    



