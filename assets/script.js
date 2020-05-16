// Displays the current date and time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

// Variables
var textareaEl = document.body.querySelectorAll("textarea");

// Gets current hours our of 24
var d = new Date();
let currentHour = d.getHours();

//  Run a function as soon as the page loads
jQuery(document).ready(function () {
  // Assign variable to save buttons
  var saveEventBtn = document.querySelectorAll(".saveBtn");

  for (let row = 0; row < saveEventBtn.length; row++) {
    saveEventBtn[row].addEventListener("click", saveEvent);
  }

  function saveEvent() {
    // Save data to localstorage
    for (var time = 1; time < textareaEl.length; time++) {
      localStorage.setItem("storedEvent" + time, $("#timeEvent" + time).val());
    }
  }

  //  check current time against each time block value
  for (let i = 0; i < textareaEl.length; i++) {
    let timeBlock = textareaEl[i].getAttribute("value");
    let timeRow = textareaEl[i];

    // Apply appropriate class based on text area value compared to current time
    if (currentHour > timeBlock) {
      $(timeRow).addClass("past");
      $("#timeEvent" + i).val(localStorage.getItem("storedEvent" + i));
    } else if (currentHour == timeBlock) {
      $(timeRow).addClass("present");
      $("#timeEvent" + i).val(localStorage.getItem("storedEvent" + i));
    } else {
      $(timeRow).addClass("future");
      $("#timeEvent" + i).val(localStorage.getItem("storedEvent" + i));
    }
  }
});

// make text area read only for .past
