//Task 1
function calcSum(a, b) {
    return a + b;
}
var sum = CalcSum(2, 3);
console.log(sum);

//Task 2
var nameEntering = prompt('Please, enter your name', '')
function defineName(name) {
    if (name == nameEntering)
        console.log('Hello ' + name);
    else {
        console.log('Sorry, it is not your name');
    }
}
var name = DefineName('Vasya')

//Task 3

function defineArgType(arg) {
    console.log(typeof (arg));
}
defineArgType('f');

//Task 4.1

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
console.log(checkAge(19));

//Task 4.2
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
console.log(checkAge(19));

//Task 5 
function min(a, b) {
    var min = a;
    if (b < a) {
        min = b;
    }
    return min;
}
console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

//Task 6 
var x = prompt('Please enter a number', '');
var n = prompt('Please enter an index', '');
function pow(x, n) {
    for (i = 1; i < n; i++) {
        x *= x;
    }
    return x;
}
if (n < 1) {
    console.log('n must be a natural');
}
else {
    console.log(pow(x, n));
}


//Task 7 : 1
function reverseNumber(number) {
    number = number + '';
    console.log(number.split('').reverse().join(''));
}
reverseNumber(32243);

//Task 8 : 2
function checkPalindrome(word) {
    var isPalindrome;
    word = word.split('');
    var j = word.length - 1;

    for (i = 0; i < word.length; i++) {
        if (word[i] != word[j]) {
            isPalindrome = false;
            break;
        }
        else {
            isPalindrome = true;
            j--;
        }
    }
    return isPalindrome;
}
console.log(checkPalindrome('madam'));

//Task 9 : 3


    function GenerateAllCombinations(string) {
    string = string.split();
    var combinations = [(string.length - 1) * (string.length - 2) * (string.length - 3)];

    for (i = 0; i < string.length; i++) {
        for (j = 0; j < combinations.length; j++) {
            combinations[j] = 
  }
    }
}

//Task 10 : 4
function Sorting(string) {
    string = string.split('').sort().join('');
    return string;
}
console.log(Sorting('webmaster'));

//Task 11 : 5 
function toUppercase(string) {
    string = string.split('');
    for (i = 0; i < string.length; i++) {
        if (string[i] == ' ') {
            string[i + 1] = string[i + 1].toUpperCase();
        }
    }
    return string.join('');
}
console.log(toUppercase('the quick brown fox'));

