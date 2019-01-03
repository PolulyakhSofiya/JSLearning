//Task 1
var a = prompt('Please enter an a value', '');
a = +a;
do {
    console.log(a);
    a--;
}
while (a > 10);

//Task 2
var i = 3;

while (i) {
    alert(i--);
} // the last value will be 1

//Task 3
var i = 0;
while (++i < 5) alert(i); //1, 2, 3, 4

var i = 0;
while (i++ < 5) alert(i);//1, 2, 3, 4, 5

//Task 4
for (var i = 0; i < 5; i++) alert(i);//0, 1, 2, 3, 4
for (var i = 0; i < 5; ++i) alert(i);//0, 1, 2, 3, 4

//Task 5
for (var i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Task 6
var i = 0;
while (i < 3) {
    alert("номер " + i + "!");
    i++;
}

//Task 7 
var number;
do {
    number = prompt("Please enter a number >100", '');
} while (number <= 100 && number != null)

//Task 8 
for (var i = 2; i <= 10; i++) {
    for (var j = 2; j <= i; j++) {
        if (i % j == 0) break;
    }
    if (j == i) console.log(i);
}