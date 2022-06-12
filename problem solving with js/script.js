// Coding Challenge 1

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
//////////////////////

// Coding Challenge 2
//Print The odd number less then 100

// for (let i = 1; i <= 100; i = i + 2) {
//   console.log(i);
// }
///////////////////////

// Coding Challenge 3
//Print the multiplication table with 7

// for (let i = 1; i <= 10; i++) {
//   const row = `7*${i}=${7 * i}`;
//   console.log(row);
// }
///////////////////////

// Coding Challenge 4
//print all the multiplication tables with numbers from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   for (z = 1; z <= 10; z++) {
//     const row = `${i}*${z}=${i * z}`;

//     console.log(row);
//   }
//   console.log("\n");
// }
/////////////////////////

// Coding Challenge 5
//Calculate the sum of numbers from 1 to 10

// var sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);
///////////////////

//Coding Challenge 6
//Calculate 10!

// let fact = 1;
// for (let i = 1; i <= 10; i++) {
//   fact = fact * i;
// }
// console.log(fact);
/////////////////////////////

//Coding Challenge 7
// Calculate the sum of odd numbers greater than 10 and less than 30

// let sum = 0;
// for (let i = 11; i <= 30; i += 2) {
//   sum += i;
// }
// console.log(sum);
////////////////////////

//COding Challenge 8
//Create a function that will convert from Celsius to Fahrenheit

// var tempCal = function (temp) {
//   var cal = temp * 1.8 + 32;
//   return cal;
// };
// console.log(tempCal(10));
////////////////////////////

//Coding Challenge 9
//Create a function that will convert from Fahrenheit to Celsius

// var tempCal = function (temp) {
//   var cal = (temp - 32) * (5 / 9);
//   return cal;
// };
// console.log(tempCal(40));
/////////////////////////

// Coding Challenge 10
// Calculate the sum of numbers in an array of nukmbers

// var sumArray = function (value) {
//   let sum = 0;
//   for (let i = 0; i < value.length; i++) {
//     sum += value[i];
//   }
//   return sum;
// };
// var value = [-3, 2, -1, 2, 5, 8, 6];

// console.log(sumArray(value));
//////////////////////////

// Coding Challenge 11
// Calculate the average of the numbers in an array of numbers

// var sumArray = function (value) {
//   let sum = 0;

//   for (let i = 0; i < value.length; i++) {
//     sum += value[i] / value.length;
//   }
//   return sum;
// };
// var value = [-3, 2, -1, 2, 5, 8, 6];

// console.log(sumArray(value));
//////////////////////////

//Coding Challenge 12
//Create a function that receives an array of numbers and returns an array containing only the positive numbers.

// var nwArr = [];
// var posNumb = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       nwArr.push(arr[i]);
//     }
//   }
//   return nwArr;
// };
// var arr = [-2, 5, -8, 4, -6, 9, 12];
// console.log(posNumb(arr));
///////////////////////////////

// Coding Challenge 13
// Find the maximum number in array of numbers

// var findMax = function (arr) {
//   var max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// var arr = [2, 5, -9, 6, 7, 8, 1];
// console.log(findMax(arr));
///////////////////////

// Coding Challenge 14
// Print the first 10 Fibonacci numbers without recursion

// var f0 = 0;
// console.log(f0);
// var f1 = 1;
// console.log(f1);

// for (let i = 2; i < 10; i++) {
//   var fi = f1 + f0;
//   console.log(fi);
//   f0 = f1;
//   f1 = fi;
// }

/////////////////////

// Coding Challenge 15
// Create a function that will find the nth Fibonacci number using recursion

// var f0 = 0;
// var f1 = 1;

// var nthFib = function (fib) {
//   for (let i = 2; i < fib; i++) {
//     var fi = f1 + f0;
//     f0 = f1;
//     f1 = fi;
//   }
//   return fi;
// };
// console.log(nthFib(11));
//////////////////////////

// Coding Challenge 16
// Create a function that will return a Boolean specifying if a number is prime

// var primeNum = function (num) {
//   if (num === 2) {
//     return `true`;
//   } else if (num > 1) {
//     for (let i = 2; i < num; i++) {
//       if (num % i !== 0) {
//         return `true`;
//       } else if (num == i * i) {
//         return `false`;
//       } else {
//         return `false`;
//       }
//     }
//   } else {
//     return `false`;
//   }
// };
// console.log(primeNum(9));

// function isPrime(n) {
//   if (n < 2) {
//     return `${n} is not a prime number`;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return `${n} is not a prime number`;
//     }
//   }
//   return `${n} is a prime number`;
// }
// console.log(isPrime(2));
////////////////////////////

// Coding Challenge 17
// Calculate the sum of digit of positive integer number

// var sum = 0;
// function posIn(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] >= 0) {
//       sum += num[i];
//     }
//   }
//   return sum;
// }
// var num = [-1, 2, -2, 3, 11, 4 - 2];
// console.log(posIn(num));
//////////////////////////

// Coding Challenge 18
// Print the first 100 prime numbers

// var primeNum = function (num) {
//   var temp = 0;
//   for (let i = 1; i <= num; i++) {
//     debugger;
//     for (let j = 2; j < i - 1; j++) {
//       debugger;
//       if (i % j === 0) {
//         temp += 1;
//       }
//     }
//     if (temp === 0) {
//       console.log(" " + i);
//     } else temp = 0;
//   }
//   return;
// };
// primeNum(100);

////////////////////////////////////////

//Coding Challenge 19
//Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

//Problem

////////////////////////////////////////
//Coding Challenge 20
// Rotate an array to the left 1 position

// var arr = [1, 2, 3];

// function rotArr(arr) {
//   var arrNw = arr.shift();
//   arr.push(arrNw);
//   console.log(arr);
//   return arr;
// }

// rotArr(arr);
///////////////////////////

//Coding Challenge 20
// Rotate an array to the left 1 position

// var arr = [1, 2, 3];

// function rotArr(arr) {
//   var arrNw = arr.pop();
//   arr.unshift(arrNw);
//   console.log(arr);
//   return arr;
// }

// rotArr(arr);

///////////////////////////////

//Coding Challenge 22
//Reverse an array

// var arr = [1, 2, 3, 4, 5, 6];
// function revArr(arr) {
//   var arrNw = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     // console.log(arr[i]);
//     arrNw.push(arr[i]);
//   }

//   return arrNw;
// }

// var arrNw = revArr(arr);
// console.log(arrNw);
//////////////////////////////

//Coding Challenge 23
//Reverse a String

// var str = "Shozib";

// function revStr(str) {
//   var strNw = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     strNw += str[i];
//   }
//   return strNw;
// }

// var finalStr = revStr(str);
// console.log(finalStr);
/////////////////////////////////

//Coding Challenge 24
// Create a function that will add two arrays and return the rsult as a new array

// var arr1 = [1, 2, 3, 4];
// var arr2 = [1, 2, 3, 4];
// var finalArr = [];

// function addArr(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     finalArr.push(arr1[i] + arr2[i]);
//   }
//   return finalArr;
// }

// var fnlArr = addArr(arr1, arr2);
// console.log(fnlArr);
/////////////////////////////////////

//Coding Challenge 24
//  Create a function that will merge two arrays and return the rsult as a new array

// var arr1 = [1, 2, 3, 4];
// var arr2 = [5, 6, 7, 8];

// var finalArr = [];

// function mergeArr(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     finalArr.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     finalArr.push(arr2[i]);
//   }
//   return finalArr;
// }

// var fnlArray = mergeArr(arr1, arr2);
// console.log(fnlArray);
/////////////////////////////////////

//Coding Challenge 25
// Create a function that will receive two array composed of all the numbers that are either in the first array or second array but not in both

// var arr1 = [1, 2, 3, 4];
// var arr2 = [3, 4, 5, 6, 7, 8];
// var finalArr = [];

// function composedArr(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       finalArr.push(arr1[i]);
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (!arr1.includes(arr2[i])) {
//       finalArr.push(arr2[i]);
//     }
//   }
//   return finalArr;
// }

// var fnlArr = composedArr(arr1, arr2);
// console.log(fnlArr);
/////////////////////////////////

//Coding Challenge 26

//Create a function that will receive two arrays and will return an array with elements that are in the first arrayt but not in the second

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [4, 5, 6, 7];

// var finalArr = [];
// function compArr(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       finalArr.push(arr1[i]);
//     }
//   }
//   return finalArr;
// }

// var fnlArr = compArr(arr1, arr2);
// console.log(fnlArr);
///////////////////////////////////

//Coding Challenge 27
// Print disnict array element

// var arr = [1, 2, 3, 1, 2];
// var rstArr = [];
// function distinctEle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     var flag = true;
//     var crntElement = arr[i];

//     for (let j = 0; j < rstArr.length; j++) {
//       if (crntElement === rstArr[j]) {
//         flag = false;
//       }
//     }
//     if (flag === true) {
//       rstArr.push(crntElement);
//     }
//   }
//   return rstArr;
// }
// console.log(distinctEle(arr));
///////////////////////////////////////
//Problem solve by bubble sort
// var arr = [1, 2, 3, 1, 2, 3, 4, 5, 5, 3];
// var nwArr = arr.sort();
// console.log(nwArr);
// for (let i = 0; i < nwArr.length; i++) {
//   var flag = true;
//   if (nwArr[i] !== nwArr[i + 1]) {
//     console.log(nwArr[i]);
//   }
// }
/////////////////////////////////

//Coding Challenge 28
// Print the distance between the first 100 prime numbers
// var sum = 0;
// function sumPrime(n) {
//   for (let i = 2; i < n; i++) {
//     var temp = 0;
//     for (let j = 2; j < i - 1; j++) {
//       if (i % j === 0) {
//         temp += 1;
//       }
//     }
//     if (temp === 0) {
//       sum += i;
//       // console.log(sum);
//     } else {
//       temp = 0;
//     }
//   }
//   return sum;
// }
// console.log(sumPrime(100));
///////////////////////////////////

//Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

///////////////////////////////////////

//Coding challenge #31a. Create a function that will return the number of words in a text

// var str = "shozib";
// function numOfWord(str) {
//   var temp = 0;
//   for (let i = 0; i < str.length; i++) {
//     temp += 1;
//   }
//   return temp;
// }
// console.log(numOfWord("shozibzahir"));
//////////////////////////////

//Coding challenge #32. Create a function that will capitalize the first letter of each word in a text
