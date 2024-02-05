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


hourUpdater();
var interval = setInterval(hourUpdater, 15000);
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#currentDay").text(moment().format("dddd, MMMM Do"));
});

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




