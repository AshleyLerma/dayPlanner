// Run as soon as the page loads
jQuery(document).ready(function () {
  // Displays the current date and time
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // Variables
  let textareaEl = document.body.querySelectorAll("textarea");
  // Gets current hours out of 24
  let currentHour = parseInt(moment().format("H"));
  // Assign variable to save buttons
  var saveEventBtn = document.querySelectorAll(".saveBtn");
  // Loop through save buttons adding an on click to each
  for (let row = 0; row < saveEventBtn.length; row++) {
    $(saveEventBtn[row]).click(function () {
      // When clicked save data to localstorage with key corresponding to the specific text area
      localStorage.setItem("storedEvent" + row, $("#timeEvent" + row).val());
    });
  }
  //  check current time against each time block data-value
  for (let i = 0; i < textareaEl.length; i++) {
    let timeBlock = parseInt($(textareaEl[i]).attr("data-value"));
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
