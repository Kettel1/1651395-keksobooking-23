const mapFilters = document.querySelector('.map__filter');
const adForm = document.querySelector('.ad-form');
const mapFiltersElements = Array.from(mapFilters.children);
const adFormElements = Array.from(adForm.children);

const disabledForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => (element.disabled = true));

  mapFilters.classList.add('.map__filter--disabled');
  mapFiltersElements.forEach((element) => (element.disabled = true));
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => (element.disabled = false));

  mapFilters.classList.remove('.map__filter--disabled');
  mapFiltersElements.forEach((element) => (element.disabled = false));
};

export {enableForm, disabledForm};
