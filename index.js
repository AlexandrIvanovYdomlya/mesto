
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
const cardsList = document.querySelector('.element-cards');
const elementName = document.querySelector('.element__name');
const elementPhoto = document.querySelector('.element__photo');
const cardButton = document.querySelector('.profile__add-button')



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





//Заполнение шаблона карточки
function renderCard(name, link) {
    const cardTemplate = document.querySelector('#element-template').content;
    const newCard = cardTemplate.querySelector('.element').cloneNode(true);
    elementName.textContent = name;
    elementPhoto.src = link;
    elementPhoto.alt = name;
    setActionsListeners(newCard);
    return newCard;
}



initialCards.forEach((newCard) => {
    cardsList.append(renderCard(newCard.name, newCard.link));
});

/*initialCards.forEach(renderCard);*/

function setActionsListeners(newCard) {
    newCard.querySelector('.element__photo').addEventListener('click',openPopupZoom);
    newCard.querySelector('.element__like').addEventListener('click',likeCard);
    newCard.querySelector('.element__trash').addEventListener('click',deleteCard);
};


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


closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
/*editButton.addEventListener('click', openPopup(profileName, profileDescription));*/
formElement.addEventListener('submit', formSubmitHandler);
cardButton.addEventListener('click')