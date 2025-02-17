function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential error if a or b is not a number
}

console.log(foo(5, 10)); // Output: 15
console.log(foo(null, 10)); // Output: null
console.log(foo(5, null)); // Output: null
console.log(foo('5', 10)); // Output: 510 (Implicit type coercion)