// Task1 : current date

var currentDate = new Date();
console.log(currentDate);

//Task2 
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());

//Task3
var date = new Date(2012, 1, 20, 3, 12)
console.log(date);

//Task4
function getWeekDay(date) {
    var day = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return day[date.getDay()];
}

var date = new Date(2012, 0, 3); // 3 января 2012
console.log((getWeekDay(date))); // 'вт'

//Task5 
function getLocalDay(date) {
    var day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}
console.log((getLocalDay(new Date(2012, 0, 3)))); // 2

//Task5 
var date = new Date(2015, 0, 2);

function getDateAgo(date, days) {
    var internalDate = new Date(date);
    internalDate.setDate(date.getDate() - days);
    return internalDate;
}

console.log((getDateAgo(date, 1))); // 1, (1 января 2015)
console.log((getDateAgo(date, 2))); // 31, (31 декабря 2014)
console.log((getDateAgo(date, 365))); // 2, (2 января 2014)

//Task6 
function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//Task7 
function getSecondsToday() {
    var date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
};
console.log(getSecondsToday());

//Task8
function getSecondsToTomorrow() {
    var now = new Date();
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    var diff = tomorrow - now;
    return Math.round(diff / 1000);
}
console.log(getSecondsToTomorrow());

//Task9 
function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

var d = new Date(2014, 0, 30); 
alert(formatDate(d));


