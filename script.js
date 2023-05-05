//display current day and time 
var currentDay = document.getElementById('currentDay');
currentDay.textContent = dayjs();
var timeBlock = document.querySelector('.time-block');
var saveBtn = document.getElementById('save-btn');

//define 9am-5pm variables to target in dterminePastPresentFuture function
var nineAm = document.querySelector('#hour-9');
nineAm = 9;
var tenAm = document.querySelector('#hour-10')
tenAm = 10;
var elevenAm = document.querySelector('#hour-11')
elevenAm = 11;
var twelvePm = document.querySelector('#hour-12')
twelvePm = 12;
var onePm = document.querySelector('#hour-13')
onePm = 13;
var twoPm = document.querySelector('#hour-14')
twoPm = 14;
var threePm = document.querySelector('#hour-15')
threePm = 15;
var fourPm = document.querySelector('#hour-16')
fourPm = 16;
var fivePm = document.querySelector('#hour-17')
fivePm = 17;

//create function to create past, present, future
function determinePastPresentFuture () {
    var currentHour = dayjs().format("HH");
    console.log(currentHour);
    for (var i = 8; i < 18; i++) {
        var hour = i; 
        console.log(hour) 
    }
        if (hour < currentHour) {
            $(this).removeClass('time-block')
            $(this).addClass('past'); 
        }
        else if (hour === currentHour) {
            $(this).removeClass('time-block')
            $(this).addClass('present');
    }
        else {
            $(this).removeClass('time-block')
           $(this).addClass('future');
        }
    }
determinePastPresentFuture ()



function saveLocalStorage () {
    var task = document.querySelector('#task')
    var taskInput = task.textContent 
    var timeBlocks = document.querySelector('.time-block');

    localStorage.setItem('timeBlocks', JSON.stringify('task'));
    console.log(localStorage)
}

saveBtn.addEventListener('click', saveLocalStorage);

nineAm.value = localStorage.getItem('task')
tenAm.value = localStorage.getItem('task')
elevenAm.value = localStorage.getItem('task')
twelvePm.value = localStorage.getItem('task')
onePm.value = localStorage.getItem('task')
twoPm.value = localStorage.getItem('task')
threePm.value = localStorage.getItem('task')
fourPm.value = localStorage.getItem('task')
fivePm.value = localStorage.getItem('task')



