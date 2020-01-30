var obj = {};

// add a property to the object
obj.aProperty = "a string";
// Which is equivalent to
obj["aProperty"] = "a string";

var obj2 = {
    property1: "An attribute string",
    property2: 123
}


// functions

function test(param1, param2) {
    console.log(param1);
    console.log(param2);
}

// JS is a loosely typed language; the function is given no knowledge of what type its parameters are:

test(1, "two");
test("one", 2);


var testFunction = function (param1, param2) {
    console.log(param1);
    console.log(param2);
}

testFunction('test', 'function');

// increment a timer every 1 second and print the result

var timer = 0;

setInterval(function() {
    console.log(timer++);
}, 1000);

// previously assigned function variables can also be used as callback functions:

setTimeout(function() {testFunction(1, 2)} , 1000); // prints 1 and 2 after 1 second of waiting


// Command Structures

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


// for loop
function forExample(input) {
    // classic for loop
    for(var i = 0; i < input; i++) {
        console.log(i);
    }

    // iterate through an array
    var array = ['gtwebdev', 'gitmad', 'designclub']
    // iterate through an array
    for(var element of array) {
        console.log(element);
    }

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
