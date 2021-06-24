import {TYPE_RU} from './data.js';

const generateOffer = (offers) => {
  const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
  const offerFragment = document.createDocumentFragment();

  offers.forEach((card) => {
    const cardElem = cardTemplate.cloneNode(true);
    const popupTitle = cardElem.querySelector('.popup__title');
    const popupAvatar = cardElem.querySelector('.popup__avatar');
    const popupTextPrice = cardElem.querySelector('.popup__text--price');
    const popupAddress = cardElem.querySelector('.popup__text--address');
    const popupTextCapacity = cardElem.querySelector('.popup__text--capacity');
    const popupTextTime = cardElem.querySelector('.popup__text--time');
    const popupDescription = cardElem.querySelector('.popup__description');
    const popupType = cardElem.querySelector('.popup__type');

    card.author.avatar ? popupAvatar.src = card.author.avatar : popupAvatar.style.display = 'none';
    card.offer.title ? popupTitle.textContent = card.offer.title : popupTitle.style.display = 'none';
    card.location ? popupAddress.textContent = card.offer.address : popupAddress.style.display = 'none';
    card.offer.price ? popupTextPrice.textContent = `${card.offer.price} ₽/ночь` : popupTextPrice.style.display = 'none';
    card.offer.type ? popupType.textContent = TYPE_RU[card.offer.type] : popupType.style.display = 'none';
    card.offer.rooms && card.offer.guests ? popupTextCapacity.textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей` : popupTextCapacity.style.display = 'none';
    card.offer.checkin && card.offer.checkout ? popupTextTime.textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}` : popupTextTime.style.display = 'none';
    card.offer.description ? popupDescription.textContent = card.offer.description : popupDescription.style.display = 'none';


    if (card.offer.features) {
      const modifiers = card.offer.features.map((feature) => `popup__feature--${feature}`);
      cardTemplate.querySelectorAll('.popup__feature').forEach((item) => {
        const modifier = item.classList[1];
        if (!modifiers.includes(modifier)) {
          item.remove();
        }
      });
    } else {
      cardElem.querySelector('.popup__features').style.display = 'none';
    }

    const popupPhotos = cardElem.querySelector('.popup__photos');
    if (card.offer.photos) {
      const photoTemplate = cardElem.querySelector('.popup__photo');
      const photoFragment = document.createDocumentFragment();
      card.offer.photos.map((photo) => {
        const photoElement = photoTemplate.cloneNode(true);
        photoElement.setAttribute('src', photo);
        photoFragment.appendChild(photoElement);
      });
      popupPhotos.innerHTML = '';
      popupPhotos.appendChild(photoFragment);
    } else {
      popupPhotos.style.display = 'none';
    }

    offerFragment.appendChild(cardElem);
  });
  return offerFragment;
};

export {generateOffer};
