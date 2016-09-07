# Instructions - 02 - JavaScript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

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

```
// script.js

console.log("Test comment.");
```

## 02: Import the javascript file into the HTML
NOTE: Officers will be on the look out for ppl who need help linking the script.js
NOTE: Discuss placement of the <script/> tag
```html
// index.html
<html>
<head>
	
</head>
<body>

<script src="./script.js"></script>
</body>
</html>
```

## 03: Javascript types

NOTE: Javascript also contains all of the expected mathematical operators `+ - / % *`

```js
// Javascript's main types:

var aNumber = new Number(2); // Number
var aString = "A String";	// String
var aDate = new Date();	// Date
var aBoolean = true;	//Boolean
var anObject = new Object();	// Object
var aNull = null;
```

## 04: Javascript Objects

```js
// working with objects

var obj = {}; // empty object
console.log(obj);

// add an attribute to the object
obj.aString = "A string";
console.log(obj);

```

## 05: Objects pt2

```js
// objects can also be instantiated using object literal notation:
var obj2 = {
    attribute1: "An attribute string",
    attribute2: 123
}

obj2.attribute3 = obj; // assigning attributes

```

## 06: Objects pt3

```js

// Notice how obj2.attribute3 has updated along with obj.

obj.aSecondString = "A String";
console.log(obj2);

```

## 07: Objects pt4 and boolean operators

```js

// objects in JS are associative arrays or name-value pairs, AKA dictionaries / maps. The value of each attribute can be accessed by its name.

var isEqual = (obj2["attribute3"] == obj2.attribute3);
console.log(isEqual);

//TODO: discuss ===

//TODO: Arrays
//TODO: mutator functions

```

## 08: Functions

NOTE: Functions are a special type of Object in JS

```js

// functions

function aFunction(param1, param2) {
    console.log("Property 1: " + param1);
    console.log("Property 2: " + param2);
}

// JS is a loosely typed language; the function is given no knowledge of what type its parameters are
aFunction(1, "two");

aFunction("one", 2);


```

## 09: Functions pt2

```js

// other ways of declaring functions

// anonymous
function (param1, param2) {
    console.log(param1);
    console.log(param2);
}

// anonymous functions can be used for as one time functions that don't need to be referenced again, or they can be assigned to a variable.

var aFunctionVar = function(param1, param2) {
    console.log(param1);
    console.log(param2);
}


```

## 10: Functions pt3 - callbacks and getTimeOut() and getInterval()

NOTE: In JS, functions can be designed to take functions in as parameters and execute them later. The function being passed in as a parameter is known as a callback function.
NOTE: JS has built various built in functions that add utility to the language, and some expect callback functions as one of their parameters. One example is `setTimeout` or `setInterval`

```js

// increment a timer every 1 second and print the result

var timer = 0;
setInterval(function() {
    console.log(timer++);
}, 1000);

// previously assigned function variables can also be used as callback functions:

setTimeout(aFunctionVar(1, 2) , 1000); // prints 1 and 2 after 1 second of waiting

```

## 11: Functions pt4

```js

obj2.aFunction = aFunctionVar;

obj2.aFunction(1, 2);

```


## 12.1: Boolean operators, Command Structures, and using the JS console from developer tools

NOTE: The web console available in your browser's developer toolkit can be used to execute functions. We will do this now with these functions

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
            console.log("true";)
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


```

## 12.2: The for loop

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

## 13: Numbers, typeof, Date pt1
NOTE: Let's make a function that takes in a Number `number` and returns a Date equivalent to the (current date) + (`number` amount of days)
```js

function getDateXDaysFromNow(x) {
    // verify that x is a number
    // get current date
    // add x days to current date and return
}

```

## 13: Numbers, isType, Date pt2
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

## 13: Numbers, typeof, Date pt3

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

## 14: Scope

NOTE: Function and Block Scope - https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

```js



```

## 15: Scope pt2 - Global namespaces

NOTE: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

```js



```

## 16: Scope pt3 - IIFE & the module design pattern
NOTE: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md


```js



```

## 17: window

```js

console.log(window);

```

## 18: Hoisting
NOTE: https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch3.md

```

```

## 19: Prototypical Inheritance

```



```

## 20: ES6

```
// let

// lambda

// const

// ...



```

## 21: Multiple JS Files and inline JS

```


```

## 22: Arrays and mutator functions

```

```