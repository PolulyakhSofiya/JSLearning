var x = 10;
var y = 5;
var c;
var d = (8, 9, 15);
console.log(+x); // Use "+" unary operator
console.log(x + y); // Use "+" unary operator
console.log(-x); // Use "-" unary operator
console.log(y - x); //Use "-" binary operator

console.log(c = y); //Use "=" operator
console.log(x % y); //Use "%" operator

console.log(++x); //Use prefix form of "++" operator
console.log(x++); //Use postfix form of "++" operator

console.log(--y); //Use postfix form of "--" operator
console.log(y--) //Use postfix form of "--" operator

console.log(x & y); //Use "&" operator
console.log(x | y); //Use "|" operator

console.log(c += x - y); 
console.log(d);
console.log(x = 15, y = 16, d = 1);

/*Comparison Operators and Boolean Values*/
console.log(5 > 4); //true
console.log('2' > '12') //true
console.log(7 <= 0) //false
console.log(false != true) //true


console.log('a' > 'B') //true
console.log('A' > 'b') //false

console.log(0 == false) //true
console.log(0 === false) //false