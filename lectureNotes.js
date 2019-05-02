//LECTURE NOTES DAY 4

/* Functions as First-class objects

can be treated like any other variable
can be assigned to variable
can be passed as an argument 
can be returned by another function

*/


/*

Function declarations and function expressions

Hoisting - a simplified process putting all your var anf unction declarations at the top (mentally, not in your actual code) for organizing your code



Function expressions need to be declared before they are called
Function declaration can be called before they are declared

*/

/*

Higher-order Functions

A function that accepts another function as input parameters or return another function

*/

var getCharacters = function() {
    var characters = ['Frodo', 'Sam', 'Merry', 'Pippin']

    var index = Math.floor(Math.random() * characters.length);

    return characters[index];
}

console.log(getCharacters())

// new fucntion

var logEach = function(list, fn) {
    for (var i = 0; i < list.length; i++) {
        fn(list[i])
    }
}

var numbers = [1, 2, 3, 4, 5, 6];

logEach(numbers, console.log);

//Example of a closure

var add = function (n) {
    return function(m) {
        return m + n;
    }
}

var addTen = add(10);
var addTen = function(m) {
    return m + n;
}

var addFive = add(5);
console.log(addTen(3));
console.log(addFive(5));

// create a function that returns a list of numbers divisible by three

var divBy = function(list, fn) {
    var ourputArr = [];
    for (var i = 0; i < list.length; i++ ) {
        if (fn(list[i])) {
            outputArr.push(list[i]);
        }
    }
    return outputArr;
}

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

var divByThree = function(number) {
    return number % 3 === 0
}

console.log(divBy(numbers, divByThree));

//callback function is a function that takes another function as a parameter


