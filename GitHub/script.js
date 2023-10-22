console.log("Hello, developers!");

let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);

let age = 25;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

function greet(name) {
    return `Hello, ${name}!`;
}
let message = greet("John");
console.log(message);

let fruits = ["apple", "banana", "orange"];
console.log(`My favorite fruit is ${fruits[0]}.`);

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
console.log(`Full Name: ${person.firstName} ${person.lastName}`);

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

localStorage.setItem("username", "john_doe");
let storedUsername = localStorage.getItem("username");
console.log(`Username: ${storedUsername}`);

