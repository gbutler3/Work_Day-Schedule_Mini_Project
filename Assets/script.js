console.log("test")

//this shows the current weekday, month, day, and year. 
function today(){
    var today = moment().format('dddd, MMM Do YYYY, h:mm a');
    $("#currentDay").text(today);
    }
    setInterval(today, 1000)