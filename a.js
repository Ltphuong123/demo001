// Get the current date
var today = new Date();

// Get the birthday person's name
var name = prompt("What is the birthday person's name?");

// Get the birthday person's age
var age = prompt("How old is the birthday person?");

// Create the greeting message
var message = "Happy " + age + "th birthday, " + name + "!";

// Write the greeting message to the document
document.write(message);