import {getRandomFractionalNumber, getRandomArrayElement, getRandomArrayElements, getRandomIntegerNumber} from './util.js';

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


const RANDOM_AVATAR_URL = (`${AVATAR_URL.url}0${getRandomIntegerNumber(1, AVATAR_COUNT + 1)}`);

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

export {simularLocations};
