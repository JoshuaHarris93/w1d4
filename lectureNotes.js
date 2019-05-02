//LECTURE NOTES DAY 4

/* Functions as First-class objects

can be treated like any other variable
can be assigned to variable
can be passed as an argument 
can be returned by another function

*/


//Function declarations and function expressions

// Hoisting

// Function expressions need to be defined before the call

var getCharacters = function() {
    var characters = ['Frodo', 'Sam', 'Merry', 'Pippin']

    var index = Math.floor(Math.random() * characters.length);

    return characters[index];
}

console.log(getCharacters())