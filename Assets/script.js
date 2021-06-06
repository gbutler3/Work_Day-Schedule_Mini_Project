//-----CURRENT MONTH, DAY YEAR, AND TIME AT TOP OF PAGE-------------

    //this shows the current weekday, month, day, and year. 
    function today(){
    var today = moment().format('dddd, MMM Do YYYY, h:mm a');
    $("#currentDay").text(today);
    }
    setInterval(today, 1000)

$(document).ready(function () { //Once the html loads all of these functions will be ready to work 

//-----SAVE BUTTON--------------------------------------------------
    
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log("Save button is being called")

        // Save text in local storage
        localStorage.setItem(time, description);
    });

//-----CLEAR BUTTON-------------------------------------------------

    //event listener for clear button
    $(".clearBtn").on("click", function (){
        //Clears on the local storage area
        window.localStorage.clear();
        //console.log("clear localstorage");
    });

    //clears the text out of the textarea
    $("#clear").click(function(){
        $(".description").val("");
    })

//-----LOCAL STORAGE CALL BACK ON RELOAD----------------------------

    //This pulls anything that is saved in local storage to display on the page if reloaded because if not it just gets displayed in the localStorage area and not on the actual webpage. 
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));

//-----COLOR CHANGES PER TIME-BLOCK PER CURRENT TIME----------------

//TODO: figure out why these aren't showing the colors correctly. 
function colorChanges (){

    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var timeSlot = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (timeSlot > currentHour) { //if the time slot is greater than the current hour mark it as past 
            $(this).addClass("past");
        }
        else if (timeSlot < currentHour) { //if the time slot is less than the current hour mark it as present
            $(this).addClass("future");
        }
        else {
            $(this).addClass("present"); 

        }
    })
        
}
colorChanges();
});
