# Instructions - 02 - JavaScript

In this tutorial, we will outline the major features of the Javascript language. This [Mozilla Developer Network page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) also serves as a great resource for further learning.

During our presentation on Tuesday, September 13th, `<gt-webdev/>` will be available to assist you with any questions.

## 01: Create an HTML page and a JavaScript file

```
|./root/
|-- index.html
|-- script.js
```

```html
// index.html
<html>
<head>

</head>
<body>

</body>
</html>
```

```js
// script.js

console.log("Test comment.");
```

## 02: Import the javascript file into the HTML

If you have trouble link to the `script.js`, look out for an officer.

In most production settings,  the `script.js` is included at the bottom of the HTML markup document as such:

```html
// index.html
<html>
<head>
</head>
<body>
	<!-- Your website markup -->
	<script src="./script.js"></script>
</body>
</html>
```

## 03: Javascript types and standard operations

```js
// Javascript's main types:

var aNumber = 2; // Number
var aString = "A String";	// String
var aDate = new Date();	// Date
var aBoolean = true;	//Boolean
var anObject = new Object();	// Object
var aNull = null;
```

As expected of all high-level languages, Javascript support the standard mathematical operations: `+`, `-`, `*`, and `/`. Check out this interesting behavior:

```js
"1" + 2 + 3;    // "123"
1 + 2 + "3";    // "33"
```

What about equality checking? Javascript has two different types of equality operators: `==` and `===`. What's the difference? Using `==` coerces types as such:

```js
101 == "101";   // true
1 == true;      // true
```

What's happening here? With `A == B`, Javascript converts `A` to the type of `B` and performs the comparison. (See [this StackOverflow post](http://stackoverflow.com/questions/19915688/what-exactly-is-type-coercion-in-javascript) for more info.) Use the non-converting comparison operator `===` if you want objects to be compared as they would be in a statically-typed language like Java or C#.

## 04: Javascript objects, part 1

```js
// working with objects

var obj = {}; // empty object
console.log(obj);

// add a property to the object
obj.aProperty = "a string";
// Which is equivalent to
obj["aProperty"] = "a string";
console.log(obj);

```

How can we do this? In Javascript, *every single object* is basically a dictionary! You can add, remove, or call a function, from a Javascript object as you would a dictionary in Python.

## 05: Javascript objects, part 2

```js
// objects can also be instantiated using object literal notation:
var obj2 = {
    property1: "An attribute string",
    property2: 123
}

obj2.property3 = obj; // assigning properties

```

## 06: Javascript objects, part 3

```js

// Notice how obj2.attribute3 has updated along with obj.

obj.aSecondString = "A String";
console.log(obj2);

```

Notice how obj2.attribute3 has updated along with obj.

## 07: Javascript objects, part 4 and boolean operators

```js

// objects in JS are associative arrays or name-value pairs, AKA dictionaries AKA maps. The value of each attribute can be accessed by its name.

var isEqual = (obj2["attribute3"] === obj2.attribute3);
console.log(isEqual);

```

## 08: Functions

In Javascript, functions are first-class objects. This means that you can store functions in data structures, pass them as arguments to other functions, and return them as values of other functions, just like you can with objects.

NOTE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function


```js

// functions

function test(param1, param2) {
    console.log("Property 1: " + param1);
    console.log("Property 2: " + param2);
}

// JS is a loosely typed language; the function is given no knowledge of what type its parameters are
test(1, "two");

test("one", 2);


```

## 09: Functions, part 2

NOTE: Immediately Invoked Function Expressions - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

```js

// other ways of declaring functions

// anonymous functions

// anonymous functions can be used for immediately invoked function expressions
(function (param1, param2) {
    console.log(param1);
    console.log(param2);
})();

// anonymous functions can be used for as one time functions that don't need to be referenced again, or they can be assigned to a variable.

var aFunctionVar = function(param1, param2) {
    console.log(param1);
    console.log(param2);
}


```

## 10: Functions, part 3 - callbacks and getTimeOut() and getInterval()

NOTE: In JS, functions can be designed to take functions in as parameters and execute them later. The function being passed in as a parameter is known as a callback function.
NOTE: JS has built various built in functions that add utility to the language, and some expect callback functions as one of their parameters. One example is `setTimeout` or `setInterval`

```js

// increment a timer every 1 second and print the result

var timer = 0;
setInterval(function() {
    console.log(timer++);
}, 1000);

// previously assigned function variables can also be used as callback functions:

setTimeout(function() {aFunctionVar(1, 2)} , 1000); // prints 1 and 2 after 1 second of waiting

```

## 11: Functions, part 4

```js

obj2.aFunction = aFunctionVar;

obj2.aFunction(1, 2);

```


## 12.1: Boolean operators, Command Structures


```js

var counter = 0;

// switch statements

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

```

## 12.2: The `for` loop

```js

// for loop
function forExample(input) {
    // classic for loop
    for(var i = 0; i < input; i++) {
        console.log(i);
    }

    // iterate through an array

    // iterate through each key of an object

}

```

## 12.3: Iterate through an array using for loop
NOTE: Using `for of` and iterable objects - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

```js

// for loop
function forExample(input) {
    ...
    var array = ['gtwebdev', 'gitmad', 'designclub']
    // iterate through an array
    for(var element of array) {
        console.log(element);
    }

}

```

## 12.4: Iterating through an object using a for loop
NOTE: If you don't want to deal with using `newObject[property]`, you will need to create an iterator function to use for the object.


```js

// for loop
function forExample(input) {
    ...
    // iterate through each key of an object
    var newObject = {
        property1: 1,
        property2: 2,
        property3: 3
    }
    for(var property in newObject) {
        console.log(newObject[property]);
    }
}

```

## 13: Numbers, typeof, Date part 1
NOTE: Let's make a function that takes in a Number `number` and returns a Date equivalent to the (current date) + (`number` amount of days)
```js

function getDateXDaysFromNow(x) {
    // verify that x is a number
    // get current date
    // add x days to current date and return
}

```

## 13: Numbers, isType, Date part 2
NOTE: The JS Number type has some quirks
NOTE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

```js

function getDateXDaysFromNow(x) {
    // verify that x is a number
    console.log(typeof x);
    if(isNaN(x)) {
        return;
    }

    // get current date
    // add x days to current date and return
}

```

## 13: Numbers, typeof, Date part 3

```js

function getDateXDaysFromNow(x) {
    var currDate;
    // verify that x is a number
    console.log(typeof x);
    if(isNaN(x)) {
        return;
    }


    // get current date
    currDate = new Date();

    // add x days to current date and return
    currDate.setDate(currDate.getDate() + x);
    return currDate;
}

```


Further Reading
---

## Scope

NOTE: Function and Block Scope - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

## Scope pt2 - Global namespaces

NOTE: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

## Scope pt3 - IIFE & the module design pattern
NOTE: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

## Hoisting
NOTE: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

## Array methods

NOTE: http://www.w3schools.com/js/js_array_methods.asp