// 7 types of data types in javasscript 
//  primitive datatype
// string, boolean, number , null, undefine , symbol, BigInt 
 
//  Nonprimitive 
//  Array, Objects, functions

// JavaScript is a dynamically typed language. This means that you don't have to explicitly declare the type of a variable when you create it, and a variable's type can change at runtime.

let exampleVar = 42;    // Initially, exampleVar is a number
console.log(typeof exampleVar);  // Outputs: "number"

exampleVar = "Hello";   // Now, exampleVar is a string
console.log(typeof exampleVar);  // Outputs: "string"

// stack - primitive 
// Heap (Non-Primitive)

//datatypes are based on memory allocation
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.