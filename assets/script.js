// Displays the current date and time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

// Based on current time apply the appropriate class (.present, .past, .future) to timeblock
/* 
    1. Run a function as soon as the page loads - jQuery(document).ready(function(){ }

    inside the function - 

    4. Assign each text area a value correspong to the timeBlockHour
    */

jQuery(document).ready(function () {
  // 2. pull value of current hour and asign to a variable (let currentHour = ??)
  let currentHour;

  //   time block values to check against
  let timeBlockHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  //  check current time against each time block
  for (let i = 0; i < timeBlockHour.length; i++) {
    timeBlock = timeBlockHour[i];
    if (currentHour > timeBlock) {
      //  apply .past to textarea with value i
    } else if ((currentHour = timeBlock)) {
      // apply .present to textarea with value i
    } else if (currentHour < timeBlock) {
      // apply .future to textarea with value i
    }
  }
});

// Save button for each row that commits input text to local storage (on click event)
// Local storage is displayed in the text area of corresponding time block
// make text area read only for .past
