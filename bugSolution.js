function foo(a, b) {
  // Explicit type checking and conversion
  if (a === null || b === null) {
    return null;
  }
  a = parseInt(a, 10);
  b = parseInt(b, 10);

  if (isNaN(a) || isNaN(b)) {
    return null; // Handle cases where conversion fails
  }

  return a + b; 
}

console.log(foo(5, 10)); // Output: 15
console.log(foo(null, 10)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo('5', 10)); // Output: 15
console.log(foo('hello', 10)); // Output: null 