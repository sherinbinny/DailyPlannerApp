$(document).ready(function()
{
    // Function to display current day
    function showCurrentDay()
    {
      $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
    }

    showCurrentDay();
  });