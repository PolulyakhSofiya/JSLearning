// Object creation
var country = {};

//Adding new properties
country.name = 'Ukraine';
country.size = 603.7;

//Editing property value
country.name = 'Georgia';

//Adding function as a property
country.sum = function (a, b) {
    console.log(a + b);
}
country.sum(2, 3);
