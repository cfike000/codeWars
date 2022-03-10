function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a-b)
    console.log(numbers)
    return numbers[0] + numbers[1]
  }