import {generateOffer} from './form.js';
import {createOffer} from './data.js';
import {enableForm, disabledForm} from './toggle.js';
import {title, price} from './validation.js';

const SIMILAR_OFFER_COUNT = 10;
const similarOffer = new Array(SIMILAR_OFFER_COUNT).fill().map(createOffer);

const allOffersFragment = generateOffer(similarOffer);
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(allOffersFragment.firstChild);


// Тонкости работы нашего линтера :)
enableForm();
disabledForm();

title;
price;
