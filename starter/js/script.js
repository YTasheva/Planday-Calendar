//Current day and time
var saveBtn = $(".saveBtn");
$("#currentDay").text(dayjs().format('MMM D dddd, h:mmA'));


//Timeblocks color
function blockColor() {
    var hour = dayjs().hours();

    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        }
        else if (blockHour === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
          
        }
    })
};


//saveBtn click event
var saveBtn=$(".saveBtn").on("click", function () {
        var description = $(this).siblings(".description").val();
        var time = $(this).siblings(".hour").text();

        if (description) {
            alert("The text is saved!");
        }
        else {
            alert("The text is not saved!");
        }
        localStorage.setItem(time, description);
    });

//load any saved data from LocalStorage

function loadTimeBlocks() {
    $(".hour").each(function () {
        var currentHour = $(this).text();
        var schedule = localStorage.getItem(currentHour);

        if (schedule !== null) {
            $(this).children(".description").val(schedule);
        
        }
    });
}

blockColor();
loadTimeBlocks();