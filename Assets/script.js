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
        })
    });