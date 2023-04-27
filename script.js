var currentDay = document.getElementById('currentDay');
currentDay.textContent = currentDay.format('LLLL');

var currentHour = currentDay.hours();

$('.time-block').each(function () {
    var hour = parseInt($(this).attr('id').split("hour")[1]);

if (hour < currentHour) {
    document.querySelector(".row time-block").style.backgroundcolor = "gray"
}
else if (hour === currentHour) {
    document.querySelector(".row time-block").style.backgroundcolor = "red"
}
else {
    document.querySelector(".row time-block").style.backgroundcolor = "green"
}
});



