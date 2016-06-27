console.log("Test comment");


// Javascript's main types:

var aNumber = new Number(2); // Number
var aString = "A String";	// String
var aDate = new Date();	// Date
var aBoolean = true;	//Boolean
var anObject = new Object();	// Object
var aNull = null;


// working with objects

var obj = {}; // empty object
console.log(obj);

// add an attribute to the object
obj.aString = "A string";
console.log(obj);

var obj2 = {
	attribute1: "An attribute string",
	attribute2: 123
}

obj2.attribute3 = obj; // objects and variables can be assigned as an object attribute


// Notice how obj2.attribute3 has updated along with obj.
// This is because obj2.attribute3 is a reference to obj.
obj.aSecondString = "A String";
console.log(obj2);

// objects in JS are associative arrays or name-value pairs, AKA dictionaries / maps. The value of each attribute can be accessed by its name.

var isEqual = (obj2["attribute3"] == obj2.attribute3);
console.log(isEqual);



// functions

function aFunction(param1, param2) {
	console.log("Property 1: " + param1);
	console.log("Property 2: " + param2);
}

// JS is a loosely typed language; the function is given no knowledge of what type its parameters are
aFunction(1, "two");

aFunction("one", 2);


// other ways of declaring functions

// anonymous
(function (param1, param2) {
	console.log(param1);
	console.log(param2);
})

// anonymous functions can be used for as one time functions that don't need to be referenced again, or they can be assigned to a variable.

var aFunctionVar = function(param1, param2) {
	console.log(param1);
	console.log(param2);
}

// increment a timer every 1 second and print the result

var timer = 0;
var beginCount = function() {
	setInterval(function() {
	    console.log(timer++);
	}, 1000);
}


// previously assigned function variables can also be used as callback functions:

setTimeout(aFunctionVar("one", "two") , 1000); // prints "one" and "two" after 1 second of waiting


// 12: Boolean operators, Command Structures, and using the JS console from developer tools


function switchExample(input) {
    switch(input) {
        case 0:
            console.log("case 0");
            break;
        case 1:
            console.log("case 1");
        case 2:
            console.log("case 2");
            break;
        default: // if none of the above
            console.log("DEFAULT");
    }
}

// if statement

function ifExample(input) {
    if (true) {
            console.log("true");
        } else {
            console.log("false");
        }
}

// while statement
var num = 0;
function whileExample(input) {
    while(num > 9999) {
        num++;
    }
    return num;

}


