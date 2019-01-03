//Task 1
alert(null || 2 || undefined); // 2

//Task 2
alert(alert(1) || 2 || alert(3)); // 1, 2

//Task 3
alert(1 && null && 2); //null

//Task 4
alert(alert(1) && alert(2)); //1, undefined

//Task 5
alert(null || 2 && 3 || 4); //3

//Task 6
var age = prompt('Please enter your age', '')
age = +age;

if (age >= 14 && age <= 90) {
    alert('Your age is valid!');
}
else {
    alert('Your age is invalid!');

}

//Task 7 , 1 method
var age = prompt('Please enter your age', '')
age = +age;

if (!(age >= 14 && age <= 90)) {
    alert('Your age is valid!');
}
else {
    alert('Your age is invalid!');

}

//Task 7 , 2 method
var age = prompt('Please enter your age', '')
age = +age;

if (age <14 && age > 90) {
    alert('Your age is valid!');
}
else {
    alert('Your age is invalid!');

}

//Task 8
if (-1 || 0) alert('первое'); //will work
if (-1 && 0) alert('второе');
if (null || -1 && 1) alert('третье'); //will work