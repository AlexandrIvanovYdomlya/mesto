
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.input__name');
let jobInput = document.querySelector('.input__description');
let editButton = document.querySelector('.profile__edit-button');
let saveButton = document.querySelector('.popup__edit-button');
let profileName = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');

function formSubmitHandler(evt) {
  evt.preventDefault();


  //profileName.textContent = profileName;
  //profileDescription.textContent = profileDescription;

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  
  closePopup();
}

function closePopup(){
  popup.classList.remove('popup_opened')
}

function openPopup(){
  popup.classList.add('popup_opened')

  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

closeButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
formElement.addEventListener('submit', formSubmitHandler);