var factorial = function(number) {
  if (number > 0) {
    return number * factorial(number - 1)

  } else {
    return 1
  }

};
