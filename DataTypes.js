let x;
const name = 'Sofiya';
const age = '15';
const year = 18;
const boolean = true;
const type = null;
var obj = {};
obj = 'object';

//"+"
console.log(name + obj);
console.log(name + age);
console.log(name + boolean);
console.log(name + type);
console.log(name + x);

console.log(year + boolean); //19
console.log(year + type);
console.log(year + obj); //"18object"
//"-"
console.log(year - age); //3
console.log(year - name); //NaN
console.log(year - x); //NaN
//"*"
console.log(age * year);
console.log(year * boolean)
//"/"
console.log(age / type); //Infinity
console.log(age / boolean); //Infinity

//Types conversion
console.log(+boolean);//1
console.log(String(year));//"18"
console.log(!!type)// false