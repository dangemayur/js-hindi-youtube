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

// There are 2 types of datatype
// 1.Primitive datatype:-
//     1.String
//     2. Number
//     3. Boolean (true / false)
//     4. null (it means empty or not zero)
//     5. undefined (You have declared your variable but you have not decided what value you will put in it)
//     6. Symbol (used to make any value unique)
//     7. BigInt (which is the bigger value and we use it in BigInt)

// 2. Preference datatype (Non Primitive datatype)
//     1. Array ( [ ] )
//     2. Object ( { } )
//     3. Function ( function( ){ } )