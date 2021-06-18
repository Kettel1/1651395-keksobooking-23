/**
 *
 * @param {Принимает целое число}firstNumber
 * @param {Принимает целое число}secondNumber
 * @returns {string|возвращает рандомное целое число в указаном диапазоне}
 */
const getRandomIntegerNumber = (firstNumber, secondNumber) => {
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);

  if (Math.sign(firstNumber) === -1 || Math.sign(secondNumber) === -1) {
    return ('Не положительные числа');
  } else {
    return (Math.floor(Math.random() * (secondNumber - firstNumber) + firstNumber));
  }
};

/**
 *
 * @param {Принимает число с остатком}firstNumber
 * @param {Принимает число с остатком}secondNumber
 * @param {Принимает целое число, кол-во знаков после запятов}quantitySign
 * @returns {string}
 */
const getRandomFractionalNumber = (firstNumber, secondNumber, quantitySign) => {
  const result = Math.random() * (secondNumber - firstNumber) + firstNumber;
  return result.toFixed(quantitySign);
};


/**
 *
 * @param {Принимает массив данных}
 * @returns {Возвращает рандомное значение массива}
 */
const getRandomArrayElement = (arr) => arr[getRandomIntegerNumber(0, arr.length)];

/**
 *
 * @param {Принимает любой массив}
 * @returns {Возвращает случайное кол-во элементов массива}
 */
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

export {getRandomIntegerNumber, getRandomArrayElements, getRandomArrayElement, getRandomFractionalNumber};
