// Displays the current date and time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

// Gets current hours our of 24
var d = new Date();
let currentHour = d.getHours();

//  Run a function as soon as the page loads - jQuery(document).ready(function(){ }
jQuery(document).ready(function () {
  //   time block values to check against text area values
  let timeBlockHour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  //  check current time against each time block
  for (let i = 0; i < timeBlockHour.length; i++) {
    timeBlock = timeBlockHour[i];
    if (currentHour > timeBlock) {
      $("").addClass("past");
      //  apply .past to textarea with value i
    } else if ((currentHour = timeBlock)) {
      // apply .present to textarea with value i
      $("").addClass("present");
    } else if (currentHour < timeBlock) {
      // apply .future to textarea with value i
      $("").addClass("future");
    }
  }
});

// Save button for each row that commits input text to local storage (on click event)
// Local storage is displayed in the text area of corresponding time block
// make text area read only for .past
