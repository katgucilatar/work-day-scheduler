//display current day and time 
var currentDay = document.getElementById('currentDay');
currentDay.textContent = dayjs();
var timeBlock = document.querySelector('.time-block');
var saveBtn = document.getElementById('save-btn');
let saveTask = localStorage.getItem("timeBlocks")


//create function to create past, present, future

$(".time-block").each(function () {
    var currentHour = dayjs().format("HH");
    let hour = $(this).attr("id").split("-")
    console.log(hour)
    if (hour[1] < currentHour) {
        $(this).addClass('past');
    }
    else if (hour[1] === currentHour) {
        $(this).addClass('present');
    }
    else {
        $(this).addClass('future');
    }
})


// create function to save items in local storage
function saveLocalStorage(event) {
    let id = event.target.parentNode.id
    var taskInput = event.target.previousElementSibling.value
    console.log(taskInput)
    localStorage.setItem('timeBlocks', JSON.stringify({ time: id, task: taskInput }));
    console.log(localStorage)
}

saveBtn.addEventListener('click', saveLocalStorage);

// create function to get items from local storage
$(".description").each(function () {
    let time = $(this).parent().attr("id")
    let parseTasks = JSON.parse(saveTask)
    for (let index = 0; index < parseTasks.length; index++) {
        const element = parseTasks[index];
        console.log(element)
        if (time == element.time) {
            $(this).val(element.task)
        }
    }
}
)



