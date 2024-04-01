$(document).ready(function()
{
    // Function to display current day
    function showCurrentDay()
    {
        $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
    }


    // Function to create timeblocks
    function presentTimeBlocks()
    {
        var container = $(".container");
        var currentHour = dayjs().hour(); // Get the current hour
  
        for(var i = 9; i <= 18; i++)
        {
            var timeBlock = $("<div>").addClass("row time-block");
            var hourCol = $("<div>").addClass("col-1 hour").text(dayjs().hour(i).format("hA"));
            var textArea = $("<textarea>").addClass("col-8 description");
    
            
        }
    }





    // Call all functions when page loads
    showCurrentDay();
    presentTimeBlocks();
  });