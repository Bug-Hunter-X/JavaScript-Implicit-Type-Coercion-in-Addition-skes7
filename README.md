# JavaScript Implicit Type Coercion Bug

This repository demonstrates a common error in JavaScript related to implicit type coercion during arithmetic operations.  Specifically, it highlights how adding a number and a string can result in unexpected string concatenation instead of numerical addition.

## The Bug

The `foo` function is intended to add two numbers. However, if either input is a string, the `+` operator performs string concatenation, leading to incorrect results. This is due to JavaScript's loose typing system, which performs automatic type coercion.

## The Solution

The solution involves explicitly checking the data type of inputs and converting them to numbers before performing the addition.  This ensures that the addition operation works as intended, regardless of the input type.  This can be done using functions like `parseInt` or `parseFloat`, or by checking if the typeof is a number.  Always be mindful of data types in your JavaScript code, and utilize type-checking where it's important for the robustness of your program.
