const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
     console.log(
        numbers.reduce((a, b) => a + b, 0)
      )
  }

  sumAll(numbers);