function testTryCatch(angka) {
  try {
    console.log("Inside try block");
    // Simulating an error
    if (angka > 10) {
      throw new Error("An error occurred!");
    }
    console.log("This line will not execute");
  } catch (error) {
    console.log("Caught an error:", error.message);
  }
}

testTryCatch(11);
