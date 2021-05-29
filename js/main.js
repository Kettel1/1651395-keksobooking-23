const getRandomIntegerNumber = (firstNumber, secondNumber) => {
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);

  if (Math.sign(firstNumber) === -1 || Math.sign(secondNumber) === -1) {
    alert ('Не положительные числа');
  } else {
    return alert (Math.floor(Math.random() * (secondNumber - firstNumber) + firstNumber));
  }
};

const getRandomFractionalNumber = (firstNumber, secondNumber, quantitySign) => {
  const result = Math.random() * (secondNumber - firstNumber) + firstNumber;
  alert(result.toFixed(quantitySign));
};

getRandomIntegerNumber();
getRandomFractionalNumber();
