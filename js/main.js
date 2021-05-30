const getRandomIntegerNumber = (firstNumber, secondNumber) => {
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);

  if (Math.sign(firstNumber) === -1 || Math.sign(secondNumber) === -1) {
    return ('Не положительные числа');
  } else {
    return (Math.floor(Math.random() * (secondNumber - firstNumber) + firstNumber));
  }
};

const getRandomFractionalNumber = (firstNumber, secondNumber, quantitySign) => {
  const result = Math.random() * (secondNumber - firstNumber) + firstNumber;
  return result.toFixed(quantitySign);
};

getRandomIntegerNumber(1, 30);
getRandomFractionalNumber();
