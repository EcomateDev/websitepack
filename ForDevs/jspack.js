// This is a comment
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function factorial(n) {
    if (n < 0) {
        throw new Error("Cannot compute factorial of negative number");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n < 0) {
        throw new Error("Cannot compute fibonacci of negative number");
    }
    if (n === 0 || n === 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
