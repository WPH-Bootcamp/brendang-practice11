class Calculator {
  static PI = 3.14159;

  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

console.log(Calculator.PI); // Output: 3.14159
console.log(Calculator.add(5, 3)); // Output: 8
console.log(Calculator.subtract(10, 4)); // Output: 6