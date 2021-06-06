console.log("test")

//this shows the current weekday, month, day, and year. 
function today(){
    var today = moment().format('dddd, MMM Do YYYY, h:mm a');
    $("#currentDay").text(today);
    }
    setInterval(today, 1000)

$(document).ready(function () { //once the html loads all of these functions will be ready to work 
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log("save button is being called")

        // Save text in local storage
        localStorage.setItem(time, description);
    });

    //Clears on the local storage area
    $(".clearBtn").on("click", function (){
        window.localStorage.clear();
        console.log("clear localstorage");
    });

    //clears the text out of the textarea
    $("#clear").click(function(){
        $(".description").val("");
    })

    //This pulls anything that is saved in local storage to display on the page if reloaded because if not it just gets displayed in the 
    //localStorage area and not on the actual webpage. 
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
});