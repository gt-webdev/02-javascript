## Javascript in the browser

---

Pramod Kotipalli ([http://pramodk.net/](http://pramodk.net/))

`<gt-webdev/>`

Tuesday, September 12th, 2016

---

In this tutorial, we'll cover:

* Document Object Model and HTML
* The request-response cycle and the desire for Javascript
* Javascript as a tool for manipulating DOM
* Full example: Simple chat application

### What is the DOM?

The DOM is the Document Object Model is a platform- and language-agnostic API that standardizes the way HTML or XML documents are interpreted. In DOM, these markup languages are intepreted as trees with each node of the tree representing an object within that document.

![HTML DOM displayed in a tree structure](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)

### But what is a markup language?

We've been talking a lot about markup languages. Let's formalize the definition and look examples. A markup language is simply a way laying out content so that both humans and machines can interpret them. For example, take the following questions from what you would see in a CS 101 class quiz:

```xml
<quiz number="2">
	<question>
		<prompt>Which of the following choices most accurately describes the Python's typing system?</prompt>
		<choices type="choose-many" max-choices=2 min-choices=1>
			<choice id=1>statically-typed</choice>
			<choice id=2>dynamically-typed</choice>
			<choice id=3>strongly-typed</choice>
			<choice id=4>weakly-typed</choice>
		</choices>
		<answers>
			<answer choice-id=2></answer>
			<answer choice-2=3></answer>
		</answers>
    </question>
</quiz>
```

Here, the data is constructed in a tree-like manner where the `question` attribute has multiple children namely `prompt`, `choices`, and `answers`. You can also see that each element can have "attributes." For example, each `choice` has an `id` attribute set to various numbers.

### On to HTML

HTML is a cousin of XML so many of the same principles apply. Let's look at some (very basic) sample HTML:

```html
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<h4>Georgia Tech colleges and undergraduate enrollment in 2015</h4>
		<table>
			<thead>
				<tr>
					<th>College</th>
					<th>Enrollment</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>College of Computing</td>
					<td>1,877</td>
				</tr>
				<tr>
					<td>College of Engineering</td>
					<td>9,418</td>
				</tr>
				<tr>
					<td>...</td>
					<td>...</td>
				</tr>
			</tbody>
		</table>
		<!-- Source: http://factbook.gatech.edu/admissions-and-enrollment/undergraduate-enrollment-by-college-table-4-16/ -->
	</body>
</html>
```
This HTML renders as the following (if you were curious):

<h4>Georgia Tech colleges and undergraduate enrollment in 2015</h4>
<table> <thead> <tr> <th>College</th> <th>Enrollment</th> </tr> </thead> <tbody> <tr> <td>College of Computing</td> <td>1,877</td> </tr> <tr> <td>College of Engineering</td> <td>9,418</td> </tr> <tr> <td>...</td> <td>...</td> </tr> </tbody> </table>

### The request-response cycle

Let's briefly discuss the web application request-response cycle and where HTML comes into play:

1. User makes a request (to say `http://www.google.com/`)
2. (Some complicated stuff involving Domain Name Servers)
3. Browser asks a Google server for the **resource** at `http://www.google.com/`
3. The Google server can respond with an HTML or even just a text file (like this one)
4. Browser receives the resource and interprets it.
	* Browser determines the filetype
	* Browser examines and renders resource if it can

So here we can see that the browser is receiving and HTML document from the web server. But now, we are stuck with static HTML documents (that can be styled with CSS) but no real interactivity.

How can we add interactivity? We can use a great language that has access to APIs in the browser that can manipulate the HTML DOM.

### Javascript as a tool for manipulating DOM

Let's say we have some simple HTML markup (which is static):

```html
<button id="btn">
	This button has been clicked <span id="counter">0</span> times.
</button>
```

When the browser renders the markup, it is static meaning that clicking the button doesn't change in state! How can we increment the `0` to `1` and `2` (and so on) when the button is clicked? Let's try our hand at Javascript:

```js
function incrementButtonCounter() {
	// `document` is a browser-specific object that is available to all Javascript functions
	// Here we are getting the DOM node with the id attribute set to "counter"
	var counter = document.getElementById("counter");
	// From that node, get innerText attribute (which has the current number)
	var countAsString = counter.innerText;
	// Call upon the Javascript built-in function parseInt to get a integer Number from the string
	var countAsNumber = parseInt(countAsString);
	// Increment the number and set it as the innerText property of the counter element
	counter.innerText = countAsNumber + 1;
}

// Get the DOM node with id set to "btn"
var btn = document.getElementById("btn");
// Listen for clicks on this element and call upon the incrementButtonCounter function
btn.addEventListener("click", incrementButtonCounter);
```

This is a fundamental example of how to use Javascript to manipulate the DOM of an HTML page.

### Full example: front-end chat application

Chat apps are very familiar to us. Let's try and develop the basics for a (mostly) complete chat application with our knowledge of HTML and Javascript (let's ignore CSS styling for now).

What are the basic front-end components of a chat application? let's list them:

* An input box for typing new messages
* A button to send the message
* A place to list all the messages

What is the (very basic) user flow?

1. User comes to our website
2. We prompt the user for their username (and save it for later)
3. User types in new message and presses submit
4. We take their message and their username append them as a single element to the messages list
5. We clear the message input
6. Repeat 3-5 until the [singularity](https://en.wikipedia.org/wiki/Technological_singularity)

#### Chat app HTML markup

Here's some markup that will work well for our purposes:

```html
<input type="text" id="message"/>
<button type="submit" id="submit">Submit</button>

<ul id="history">
	<li><span id="username">(unknown)</span>, welcome to our chat room! Let's be friends! :) </li>
</ul>
```

Let's implement our user flow in Javascript:

```js
// Used to query the local storage
const LOCAL_STORAGE_KEY = 'chat-username';

// Get the user's username from localStorage. If there is no username, then ask the user for it. (window.localStorage persists for the time the browser remains open)
var username = localStorage.getItem(LOCAL_STORAGE_KEY);
while (username == null || username == "") {
	username = prompt("Welcome new user! What is your username?");
}

// Set the localStorage username entry
localStorage.setItem(LOCAL_STORAGE_KEY, username);

// Set the username in the DOM
document.getElementById("username").innerHTML = username;

// Gather all the elements we'll be using later
var submitButton = document.getElementById("submit"),
	historyElement = document.getElementById("history"),
	messageElement = document.getElementById("message");

// Create a function that can be called upon from this script or another script that can talk with a server
var addNewMessage = function (text) {
	var newMessageNode = document.createElement("li");
	var messageNodeText = document.createTextNode(text);
	newMessageNode.appendChild(messageNodeText);
	historyElement.appendChild(newMessageNode);
};

// Called to handle the submission of a new message
var sendMessage = function () {
	var messageText = messageElement.value;

	if (messageText == null || messageText == "") {
		// Ask the user if s/he wants to actually send a blank message
		var sendEmptyMessage = confirm(username + ", are you sure you want to send an empty message?");
		if (!sendEmptyMessage) return;
	}

	addNewMessage(username + ": " + messageText);
	messageElement.value = "";
};

// Listen for a click on the submit button
submitButton.addEventListener("click", sendMessage);
```

Combining these two components together allows to create a very simple Javascript-based front-end for an interactive chat application.

### What if the user has disabled Javascript?

If the user has disabled Javascript (mainly for security reasons), your browser can detect that and call display a special message to the user. Just add the following markup:

```html
<noscript>
    <p>You don't have Javascript enabled!</p>
</noscript>
```

If Javascript is enabled, then the above tag won't be rendered.

### And this concludes the Javascript-in-the-browser tutorial!

---

Pramod Kotipalli, `<gt-webdev/>`
