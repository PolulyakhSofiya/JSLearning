//Task 1
var arr = [1, 2, 3, 4];

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Task 2
var arrJoin = arr.join(',');
console.log(arrJoin); // array is converted to a string

var arrSplit = arrJoin.split();
console.log(arrSplit); // string is converted in an array

//Task 3
var arr3 = [1, 2, 3, 4];
for (var i = 0; i < arr3.length; i++) {
    console.log(arr3[i] + ' hello');
}

//Task 4
var arr4 = [0, 2, null, 4];
for (var i = 0; i < arr4.length; i++) {
    console.log(!!arr4[i]);
}


