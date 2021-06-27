import {PRICE_FOR_TYPE} from './data.js';

const title = document.querySelector('#title');
const price = document.querySelector('#price');
const houseType = document.querySelector('#type');


const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

title.addEventListener('input', () => {
  const titleLength = title.value.length;
  if (titleLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`Еще ${MIN_TITLE_LENGTH - titleLength} символов`);
  } else if (titleLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`Удалите лишнее ${MAX_TITLE_LENGTH - titleLength} симв.`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});

price.addEventListener('input', () => {
  const priceValue = price.value;
  if (isNaN(priceValue)) {
    price.setCustomValidity('Только цифры');
  } else if (priceValue > MAX_PRICE) {
    price.setCustomValidity('Максимально 1 000 000');
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
});


houseType.addEventListener('change', () => {
  const value = PRICE_FOR_TYPE[houseType.value];
  switch (houseType.value) {
    case 'hotel':
      price.setAttribute('min', value);
      price.setAttribute('placeholder', value);
      break;
    case 'bungalow':
      price.setAttribute('min', value);
      price.setAttribute('placeholder', value);
      break;
    case 'house':
      price.setAttribute('min', value);
      price.setAttribute('placeholder', value);
      break;
    case 'flat':
      price.setAttribute('min', value);
      price.setAttribute('placeholder', value);
      break;
    case 'palace':
      price.setAttribute('min', value);
      price.setAttribute('placeholder', value);
      break;
  }
});


export {title, price};
