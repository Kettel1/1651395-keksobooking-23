const AVATAR_COUNT = 8;
const SIMULAR_OFFER_COUNT = 10;
const AVATAR_URL = {
  url: 'img/avatars/user/',
};
const CHECKIN_TIME = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const TYPE_HOUSE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const LAT_Y = [35.65000, 35.70000];
const LNG_X = [139.70000, 139.80000];


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

const RANDOM_AVATAR_URL = (`${AVATAR_URL.url}0${getRandomIntegerNumber(1, AVATAR_COUNT + 1)}`);

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


const getLocations = () => ({
  lat: getRandomFractionalNumber(LNG_X[0], LNG_X[1], 5),
  lng: getRandomFractionalNumber(LAT_Y[0], LAT_Y[1], 5),
});

const createOffer = () => {
  const location = getLocations();

  return {
    author: {
      avatar: RANDOM_AVATAR_URL,
    },
    offer: {
      title: 'Заголовок предложения. Придумал самостоятельно',
      address: getLocations(),
      price: getRandomIntegerNumber(500, 1000),
      type: getRandomArrayElements(TYPE_HOUSE),
      rooms: getRandomIntegerNumber(1, 5),
      guests: getRandomIntegerNumber(1, 11),
      checkin: CHECKIN_TIME[1],
      checkout: CHECKOUT_TIME[2],
      features: getRandomArrayElements(FEATURES),
      description: 'Описание помещения. Придумал самостоятельно',
      photos: getRandomArrayElement(PHOTOS),
    },
    location: (location),
  };
};

// eslint-disable-next-line no-unused-vars
const simularLocations = new Array(SIMULAR_OFFER_COUNT).fill(null).map(() => createOffer());
