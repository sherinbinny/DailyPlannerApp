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
        
        // Display time from 9am-6pm
        for(var i = 9; i <= 18; i++)
        {
            var timeBlock = $("<div>").addClass("row time-block");
            var hourCol = $("<div>").addClass("col-1 hour").text(dayjs().hour(i).format("hA"));
            var textArea = $("<textarea>").addClass("col-9 description");
            
            // Check if time is in the past, present or future
            if(i < currentHour)
            {
                textArea.addClass("past");
            }
            else if (i === currentHour)
            {
                textArea.addClass("present");
            }
            else
            {
                textArea.addClass("future");
            }
            
            // Add save and remove button
            var saveBtn = $("<button>").addClass("col-1 saveBtn").html("<i class='fas fa-save'></i>");
            var removeBtn = $("<button>").addClass("col-1 removeBtn").html("<i class='fas fa-trash'></i>");
            
            // Append block to container
            timeBlock.append(hourCol, textArea, saveBtn, removeBtn);
            container.append(timeBlock);
        }
    }





    // Call all functions when page loads
    showCurrentDay();
    presentTimeBlocks();
  });