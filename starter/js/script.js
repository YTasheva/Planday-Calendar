//Current day and time
var dayNtime = $("#currentDay").text(dayjs().format('MMM D dddd, h:mmA'));

//Timeblocks color

    $(".time-block").each(function () {
        var currentHour = parseInt(dayjs().format('H'));
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < currentHour) {
            // past white color block
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            // present red color block
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            // future blue color block
            $(this).addClass("future");
        }
    });


//saveBtn click event
var saveBtn=$(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        if (value) {
            alert("The text is saved!");
        }
        else {
            alert("The text is not saved!");
        }
        localStorage.setItem(time, value);
    });

    //load any saved data from LocalStorage



    
    loadTimeBlocks();