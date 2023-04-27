// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. 
  // This code should use the id in the containing time-block as a key to save the user input in
  // local storage. 
  // HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


var currentDayEl = $('#currentDay');
var containerEl = $('.container');
var currentHour = time().hour();

var workDayHours = [
    time().hour(9).format('h:mm A'),
    time().hour(10).format('h:mm A'),
    time().hour(11).format('h:mm A'),
    time().hour(12).format('h:mm A'),
    time().hour(13).format('h:mm A'),
    time().hour(14).format('h:mm A'),
    time().hour(15).format('h:mm A'),
    time().hour(16).format('h:mm A'),
    time().hour(17).format('h:mm A')
];

//target the div that holds the time block hour
var timeBlockHour = $('col-1 hour')
//target the div that holds the task info
var task = $('.description')

// ** END GLOBAL VARIABLES ** //

//add current day to <p> tag in jumbotron
var currentDay = date().format(dddd, MMMM D, YYYY h:mm A);
currentDayEl.text(currentDay);


//compare each time block to the current time
// - if after, if present, add class of 'future' to timeBlockEventSpace
// - if equal, add class of 'present' to timeBlockEventSpace
// - else add class of past to timeBlockEventSpace

function auditTimeBlock(timeBlockEventSpace) {
    //retrieve the hour from the div and convert it to the x'th hour of the day
    var currentTimeBlockHour = moment($(timeBlockHour).text().trim(), 'hA').hour();

    //remove class of 'past present future
    $(timeBlockEventSpace).removeClass('past present future');

    //conditional to add correct color background to time block depending on time
    if (currentTimeBlockHour > currentHour) {
        $(timeBlockEventSpace).addClass('future');
    }
    else if (currentTimeBlockHour === currentHour) {
        $(timeBlockEventSpace).addClass('present');
    }
    else {
        $(timeBlockEventSpace).addClass('past');
    }
}
// create function to load tasks
function loadTask() {

    //create for loop to get task for each hour
    //hour is the indexes of workDayHours
    //task is the value of <p> at that index

    for (var i = 0; i < workDayHours.length; i++) {
        let task = localStorage.getItem(workDayHours[i])

        if (task) {
            $('#' + (i + 9)).siblings().first().children().text(task);
        }
    }
}
// create function to save task
function saveTask(hour, task) {
    localStorage.setItem(hour, task);
}

//add time blocks for each hour (3 columns in 9 rows: 9AM to 5PM) format for 9AM is hA
for (var i = 0; i < workDayHours.length; i++) {
    //add div with class row
    var timeBlockRow = $('<div>')
        .addClass('row time-block')
        .attr({
            id: 'row-' + (i + 9)
        })

    // add 1 div with class hour
    var timeBlockHour = $('<div>')
        .addClass('col-1 hour')
        .text(workDayHours[i])
        .attr({
            id: i + 9
        })

    // add 1 div with class
    var timeBlockEventSpace = $('<div>')
        .addClass('col-10')
        .attr({
            id: 'time-block-' + (i + 9)
        })

    // add p element with class of description
    var userInput = $('<p>')
        .addClass('description')
        .text(' ')
        .attr({
            id: 'Hour-' + (i + 9)
        });

    //check time
    auditTimeBlock(timeBlockEventSpace);

    // add a button with class saveBtn
    var saveBtn = $('<button>')
        .addClass('col-1 saveBtn')
        .attr({
            id: 'save-button-' + (i + 9),
            type: 'button',
        })
        .on('click', function () {
            // retrieve the hour of the timeblock
            var hour = $(this).siblings().first().text();
            // retrieve the value in <p> element
            var task = $(this).siblings().last().text();

            //save to local storage
            saveTask(hour, task)

        })

    // add save icon
    var saveIcon = $('<i>')
        .addClass('fas fa-save');

    //append timeBlockRow to div container
    $(containerEl).append(timeBlockRow);
    //append timeBlockHour to TimbeBlockRow
    $(timeBlockRow).append(timeBlockHour);
    //append timeBlockEventSpace to timeBlockRow
    $(timeBlockRow).append(timeBlockEventSpace);
    //append <p> element to timeBlockEventSpace
    $(timeBlockEventSpace).append(userInput);
    //append save button to timeBlowRow
    $(timeBlockRow).append(saveBtn);
    //append save icon to save button
    $(saveBtn).append(saveIcon);
}


// to load tasks on every refresh
loadTask();
