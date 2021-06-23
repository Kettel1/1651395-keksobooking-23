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

const getRandomArr = (arr) => {
  const lengthArr = getRandomIntegerNumber(0, arr.length - 1);
  const array = [];
  for (let i = 0; i <= lengthArr; i++) {
    array.push(arr[i]);
  }
  return array;
};

//Возвращает один случайный элемент из массива
const getRandomArrayElement = (arr) => arr[getRandomIntegerNumber(0, arr.length)];


const getRandomArrayElements = (arr) => {
  const elements = getRandomIntegerNumber(0, arr.length);
  let tempArr = [];
  if (elements === arr.length) {
    tempArr = arr;
    return tempArr;
  }
  tempArr.fill(null, 0, elements);

  for (let item = 0; item < elements; item++) {
    const currentElement = arr[getRandomIntegerNumber(0, arr.length)];
    if (tempArr.some((currentValue) => currentValue === elements)) {
      item--;
      continue;
    } else {
      tempArr[item] = currentElement;
    }
  }
  return tempArr;
};

export {getRandomIntegerNumber, getRandomArrayElements, getRandomArrayElement, getRandomFractionalNumber, getRandomArr};
