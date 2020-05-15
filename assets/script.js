// Displays the current date and time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

// Based on current time apply the appropriate class (.present, .past, .future) to timeblock
/* 
    1. Run a function as soon as the page loads - jQuery(document).ready(function(){ }

    inside the function - 

    2. pull value of current hour and asign to a variable (let currentHour = ??)
    3. Create local variable for time block hour values in military time (let timeBlockHour = [9-17])
    4. Assign each text area a value correspong to the timeBlockHour
    5. Create a for loop to check each time block (let i = 0, i < timeBlockHour.length, i ++)
    6. if (currentHour > timeBlockHour[i]){apply .past to textarea with value i}
    7. if (currentHour = timeBlockHour[i]){apply .present to textarea with value i}
    8. if (currentHour < timeBlockHour[i]){apply .future to textarea with value i}
    */
// Save button for each row that commits input text to local storage (on click event)
// Local storage is displayed in the text area of corresponding time block
// make text area read only for past time blocks
