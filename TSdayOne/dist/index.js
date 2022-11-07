"use strict";
function reverseString(str) {
    let newString = '';
    let strLength = str.length;
    while (strLength > 0) {
        newString += str.substring(strLength - 1, strLength);
        strLength--;
    }
    return newString;
}
console.log(reverseString('MyString'));
function fibonacciSeries(num) {
    if (num < 0)
        return 0;
    else if (num == 0)
        return 0;
    else if (num == 1 || num == 2)
        return 1;
    else
        return fibonacciSeries(num - 1) + fibonacciSeries(num - 2);
}
console.log(`Your Fibonacci number of 8 is: ${fibonacciSeries(8)}`);
function stringPalindrome(str) {
    let splitStr = str.split('');
    let revStr = splitStr.reverse().join('');
    if (revStr === str) {
        return (`Your string: ${str} is a Palindrome`);
    }
    else
        return (`Your string: ${str} is NOT a Palindrome`);
}
console.log(stringPalindrome('racecar'));
console.log(stringPalindrome('cat'));
function numberPalindrome(num) {
    let numToString = num.toString();
    let numSplit = numToString.split('');
    let revNum = numSplit.reverse().join('');
    if (Number(revNum) === num) {
        return (`Your number: ${num} is a Palindrome`);
    }
    else
        return (`Your number: ${num} is NOT a Palindrome`);
}
console.log(numberPalindrome(1234321));
console.log(numberPalindrome(1234567));
function findLeapYear(num) {
    if ((num % 4 == 0) && (num % 100 != 0) || (num % 400 == 0)) {
        return (`Your input year: ${num} is a leap year`);
    }
    else
        return (`Your input year: ${num} is NOT a leap year`);
}
console.log(findLeapYear(2048));
console.log(findLeapYear(2049));
function checkForPrimeNumber(num) {
    if (num <= 1)
        return ('Number must be greater than 1');
    else if (num == 2)
        return (`Yes: ${num} is a prime number`);
    else if (num % 2 == 0)
        return (`Sorry: ${num} is not a prime number`);
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return (`Sorry: ${num} is not a prime number`);
            break;
        }
    }
    return (`Yes: ${num} is a prime number`);
}
console.log(checkForPrimeNumber(5));
console.log(checkForPrimeNumber(15));
console.log(checkForPrimeNumber(23));
console.log(checkForPrimeNumber(45));
//# sourceMappingURL=index.js.map