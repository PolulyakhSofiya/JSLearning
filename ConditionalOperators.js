//Comparing string using if-else

var name = prompt('Enter a name, please!', '');
if (name == 'Sofi') {
    alert('You are my namesake!');
}

else {
    alert('Hello, ' + name + '!');
};

//Comparing numbers using "ternary operator"

var number = prompt('Enter a number, please!', '');
number = +number;
(number > 7) ? alert('Hello!') : alert('Goodbye');



//Comparing boolean using switch

var pet = prompt('Do you have any pets! Please enter "true" or "false"')
pet = !!pet;

switch (age) {

    case true:
        alert('My congratulations!');
        break;

    case false:
        alert('Do not worry! buy a pet!')
        break;
    default:
        alert('You do not enter the needed word! Please, try again');
}