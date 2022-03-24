
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup-form__input_type_name');
let jobInput = document.querySelector('.popup-form__input_type_description');
let editButton = document.querySelector('.profile__edit-button');
let saveButton = document.querySelector('.popup__edit-button');
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let body = document.querySelector('.body')

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

console.log(initialCards.map(renderCards).join(''));

const cardsList = document.querySelector('#element-template');

//Заполнение шаблона карточки
function renderCards(cardName, cardLink){
  const card = `<li class="element">
          <img class="element__photo" src="${cardLink}" alt="карачаевск">
          <p class="element__name">${cardName}</p>
          <button type="button" class="button element__like"></button>
        </li>`
}

cardsList.innerHTML = cardsList.innerHTML + initialCards.map(renderCards).join('')

//Заполнение формы профиля
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closePopup();
}

//Закрытие модального окна
function closePopup(){
    popup.classList.remove('popup_opened')
    body.classList.remove('body_popup')
}

//Открытие модального окна
function openPopup(){
    popup.classList.add('popup_opened')
    body.classList.add('body_popup')

    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
}
/*
function openPopup(title, subtitle){
  popup.classList.add('popup_opened')
  body.classList.add('body_popup')

  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
}*/

function addCard(name, link){
    const cardTemplate = document.querySelector('.element__name'/*'#element-template'*/).content;
    const linkTemplate = document.querySelector('.'/*'#element-template'*/).content;


}

closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
/*editButton.addEventListener('click', openPopup(profileName, profileDescription));*/
formElement.addEventListener('submit', formSubmitHandler);