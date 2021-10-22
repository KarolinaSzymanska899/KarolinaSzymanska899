// question 5
// Create a function that accepts two arguments.
// Inside the function, try to convert the arguments to numbers.

// If either of the arguments cannot be converted to a number,
// return the value: "Invalid argument(s)".

// If both arguments are number values or can be converted to number values,
// subtract the second argument from the first and return the result from the function.

// Call the function, pass in to two values
// and assign the return value to be the innerHTML value of the element with the id subtraction.
// Test your function with the following value pairs: (1, 42), (200, 150),
// (10, "50"), ("100", "400"), ("Ten", "One Hundred"), (null, 123);

function subtraction(number1, number2) {
  var convertedNumber1 = parseFloat(number1);
  var convertedNumber2 = parseFloat(number2);

  if (isNaN(convertedNumber1) || isNaN(convertedNumber2)) {
    return "Invalid argument(s)";
  } else {
    var result = convertedNumber1 - convertedNumber2;
    return result;
  }
}

var container = document.querySelector("#subtraction");
var result = container.innerHTML;

subtraction(5, 20);
subtraction(1, 42);
subtraction(200, 150);
subtraction(10, "50");
subtraction("100", "400");
subtraction("Ten", "One Hundred");
subtraction(null, 123);
