const cardsContainer = document.querySelector('.cards');
const btnOpenPopupForm = document.querySelector('#add');
const formCatAdd = document.querySelector('#popup-form-cat');


const popupAddCat = new Popup('popup-add-cats');
popupAddCat.setEventListener();

btnOpenPopupForm.addEventListener('click', () => {
  popupAddCat.open();
});


cats.forEach(function (catData) {
  const cardInstance = new Card(catData, '#card-template');
  const newCardElement = cardInstance.getElement();
  cardsContainer.append(newCardElement);
});

console.log(cardsContainer);


formCatAdd.addEventListener('submit', handleFormAddCat)

function serializeData(elements) {
  const formData = {};
  elements.forEach((input)=> {
    if (input.type === 'submit') return;

    if (input.type !== 'checkbox') {
      formData[input.name] = input.value;
    } else {
      formData[input.name] = input.checked;
    }
  })
  return formData;
}

function handleFormAddCat(event) {
  event.preventDefault();
  const elementsFormCat = [...formCatAdd.elements];
  const dataFromForm = serializeData(elementsFormCat);
  const cardInstance = new Card(dataFromForm, '#card-template');
  const newCardElement = cardInstance.getElement();
  cardsContainer.append(newCardElement);
  // console.log(dataFromForm);
  popups.close();
}

