// Displays the current date and time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

// Variables
var textareaEl = document.body.querySelectorAll("textarea");

// Gets current hours our of 24
var d = new Date();
let currentHour = d.getHours();

//  Run a function as soon as the page loads
jQuery(document).ready(function () {
  //  check current time against each time block value
  for (let i = 0; i < textareaEl.length; i++) {
    let timeBlock = textareaEl[i].getAttribute("value");
    let timeRow = textareaEl[i];

    // Apply appropriate class based on text area value compared to current time
    if (currentHour > timeBlock) {
      $(timeRow).addClass("past");
      console.log("it's later");
    } else if (currentHour == timeBlock) {
      console.log("it's that time");
      $(timeRow).addClass("present");
    } else {
      $(timeRow).addClass("future");
      console.log("it's earlier");
    }
  }
});

// Save button for each row that commits input text to local storage (on click event)
// Local storage is displayed in the text area of corresponding time block
// make text area read only for .past
