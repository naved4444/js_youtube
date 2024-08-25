"use strict";       //treat all js code as newer version

// number => 2 to the power 53
// bigint => to store large numbers, used in stock market or high traffic websites, etc.
// string => ""
// boolean => true/false
// null => standalone value (empty)
// undefined => value is not assigned to a variable (variable is not initialised)
// symbol => to identify if a component is unique or not (mostly used in reactJS)
// object

console.log(typeof null);                   // O/P : object
console.log(typeof undefined);              // O/P : undefined

// //                                          CONVERSIONS                                                                 //

let score = "33";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

score = "33abc";
valueInNumber = Number(score);
console.log(typeof valueInNumber);           // O/P: number
console.log(valueInNumber);                 // O/P: NaN (not a number)

// let score = null;
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);              // O/P: number
// console.log(valueInNumber);                    // O/P: 0

// "33" => 33
// "33abc" => NaN
// null => 0
// true => 1    false => 0

// "" => false  "anything_inside(not an empty string)" => true

//                                                         OPERATIONS                                                       //

let value = 3;
let valueInNeg = -value;
console.log(valueInNeg);                            // o/p: -3

console.log(1+4+"2"+3);                                // o/p: 523

console.log(true);                                  // o/p: true
console.log(+true);                                 // o/p: 1
// console.log(true+);                              // o/p: error

let num1, num2, num3;
num1 = num2 = num3 = 2+2;
console.log(num1);

let str = "02";
let str_to_num = Number(str);
console.log(str_to_num);                            // o/p: 2
console.log(typeof(str_to_num));                    // o/p: number


