
const profilePopup = document.querySelector('.popup_name_profile');
const cardPopup = document.querySelector('.popup_name_add-card');
const imagePopup = document.querySelector('.popup_name_zoom-card');

const formElement = document.querySelector('.popup__form');
const formCard =document.querySelector('.form_card');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_description');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonSave = document.querySelector('.popup__edit-button');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
/*const popup = document.querySelector('.popup');*/

const buttonClosePopupProfile = document.querySelector('.popup__close');
const body = document.querySelector('.body')
const cardsContainer = document.querySelector('.elements__cards');
const elementName = document.querySelector('.element__name');
const elementPhoto = document.querySelector('.element__photo');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonSaveImg = document.querySelector('.popup__button-save-img');
const buttonClosePopupCard = document.querySelector('.button_close-popup-card');
const buttonClosePopupZoom = document.querySelector('.button_close-popup-zoom');
const buttonLike = document.querySelector('.element__like');
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
const formPopupCard = document.querySelector('.form_card');
const cardTemplate = document.querySelector('#element-template').content;
const inputImgName = document.querySelector('.form__input_type_img-name');
const inputImgLink = document.querySelector('.form__input_type_img-link');



initialCards.forEach((newCard) => {
    cardsContainer.append(renderCard(newCard.name, newCard.link));
});


//Заполнение шаблона карточки
function renderCard(name, link) {
    const newCard = cardTemplate.querySelector('.element').cloneNode(true);

    newCard.querySelector('.element__name').textContent = name;
    newCard.querySelector('.element__photo').src = link;
    newCard.querySelector('.element__photo').alt = name;

    /*setActionsListeners(newCard);*/
    /*newCard.querySelector('.element__like').addEventListener('click', function (evt){
        evt.target.classList.toggle('element__like_true');
    });

     */
/*
    newCard.querySelector('.element__trash').addEventListener('click', function (evt){
        evt.currentTarget.closest('.element').remove();
    });

 */


    newCard.querySelector('.element__photo').addEventListener('click', openPopupZoomCard/*function (evt){
        evt.openPopup(popupZoomCard);
    }*/);

    return newCard;
}

//Заполнение формы профиля
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    closePopup(profilePopup);
}

function openPopup(popup){
    popup.classList.add('popup_opened')
}

function closePopup(popup){
    popup.classList.remove('popup_opened')
}

//Открытие модального окна профиля
function openPopupProfile(){
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
    openPopup(profilePopup)
}

//Открытие попапа добавления карточки
/*function openPopupCard(){

    cardPopup.classList.add('popup_opened')
    body.classList.add('body_popup')
}
*/
//Заполнение формы карточки
function formSubmitHandlerCard(evt) {
    evt.preventDefault();
    cardsContainer.prepend(renderCard(inputImgName.value, inputImgLink.value));
    closePopup(cardPopup);
    formCard.reset();
}

formPopupCard.addEventListener('submit', formSubmitHandlerCard);

function openPopupZoomCard(evt){
    imagePopup.querySelector('.popup__title').textContent = evt.target.alt;
    imagePopup.querySelector('.popup__image').src = evt.target.src;
    imagePopup.querySelector('.popup__image').alt = evt.target.alt;
    openPopup(imagePopup)

}


buttonClosePopupProfile.addEventListener('click', () => closePopup(profilePopup));
buttonEditProfile.addEventListener('click', openPopupProfile);
buttonAddCard.addEventListener('click', () => openPopup(cardPopup));
/*editButton.addEventListener('click', openPopup(profileName, profileDescription));*/
formElement.addEventListener('submit', formSubmitHandler);
buttonClosePopupCard.addEventListener('click', () => closePopup(cardPopup));
buttonClosePopupZoom.addEventListener('click', () => closePopup(imagePopup));

/*
//Усовершенствованный вариант
nameInput.addEventListener('keydown', keyHandler);

jobInput.addEventListener('keydown', keyHandler);

function keyHandler(evt) {
  if (evt.key === 'Enter') {
    renderCard(nameInput.value, jobInput.value);
  }
}







 */

const closePopupEsc = (popup) => {
    document.removeEventListener('keydown', handlerEscUp);
    popup.classList.remove('popup_opened');
};

const handlerEscUp = (evt) => {
    /*evt.preventDefault();*/
    const activePopup = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopupEsc(activePopup);
    }
};

cardsContainer.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('element__like')) {
        evt.target.classList.toggle('element__like_true');
    }
});

cardsContainer.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('element__trash')) {
        console.log('test');
        /*evt.target.classList.closest('.element').remove();*/
    }
});



