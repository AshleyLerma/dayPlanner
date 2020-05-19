// Displays the current date and time
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// Variables
let textareaEl = document.body.querySelectorAll("textarea");
// Gets current hours out of 24
let currentHour = parseInt(moment().format("H"));

//  Run a function as soon as the page loads
jQuery(document).ready(function () {
  // Assign variable to save buttons
  var saveEventBtn = document.querySelectorAll(".saveBtn");
  // Loop through save buttons adding an on click to each
  for (let row = 0; row < saveEventBtn.length; row++) {
    saveEventBtn[row].addEventListener("click", saveEvent);
  }
  // Save function
  function saveEvent() {
    // Save data to localstorage with key corresponding to the text area
    for (var time = 0; time < textareaEl.length; time++) {
      localStorage.setItem("storedEvent" + time, $("#timeEvent" + time).val());
    }
  }

  //  check current time against each time block value
  for (let i = 0; i < textareaEl.length; i++) {
    let timeBlock = parseInt(textareaEl[i].getAttribute("data-value"));
    let timeRow = textareaEl[i];

    // Apply appropriate class based on text area value compared to current time
    // Pull any saved events from local storage and add them to the time block
    // Text area read only for past time blocks
    if (currentHour > timeBlock) {
      $(timeRow).addClass("past");
      $(timeRow).prop("readonly", true);
      $("#timeEvent" + i).val(localStorage.getItem("storedEvent" + i));
    } else if (currentHour === timeBlock) {
      $(timeRow).addClass("present");
      $("#timeEvent" + i).val(localStorage.getItem("storedEvent" + i));
    } else {
      $(timeRow).addClass("future");
      $("#timeEvent" + i).val(localStorage.getItem("storedEvent" + i));
    }
  }
});
