//Добавление слушателей каждой форме
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.form__input'));
    const buttonElement = formElement.querySelector('.form__submit');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => {
        return !inputElement.validity.valid;
    });
}
//Неактивная кнопка
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('form__submit_invalid');
    } else {
        buttonElement.classList.remove('form__submit_invalid');
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);//Найденная внутри формы ошибка
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

const hideInputError = ( formElement,inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);//Найденная внутри формы ошибка
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

//Проверка на валидность
const checkInputValidity = (formElement, inputElement) => {//Проверить правильность ввода
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};



const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form[name="profile"]'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        /*const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        });

         */
    });
};
enableValidation({
    formSelector: '.popup__form',//форма
    inputSelector: '.form__input',//поле ввода
    submitButtonSelector: '.form__submit',//кнопка отпраки
    inactiveButtonClass: '.form__submit_invalid',//
    inputErrorClass: 'popup__input_type_error',
    errorClass: '.popup__error_visible'
});





/*
const formElementProfile = document.querySelector('.form');

const formInputProfileName = formElementProfile.querySelector('.popup-form__input_type_name')
const formInputProfileDescription = formElementProfile.querySelector('.ppopup-form__input_type_description');
const formError = formElementProfile.querySelector(`.${formInputProfileName.id}-error`);

const formElementCard = document.querySelector('.popup-form_card');
const formInputImgName = formElementCard.querySelector('.popup-form__input_type_img-name');
const formInputImgLink =formElementCard.querySelector('.popup-form__input_type_img-link');

const showError = (input, errorMessage) => {
    input.classList.add('popup-form__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('popup-form__input-error_active');
};

const hideError = (input) => {
    input.classList.remove('popup-form__input_type_error');
};

const checkInputValidity = () => {
    if (!formInputProfileName.validity.valid) {
        showError (formInputProfileName, formInputProfileName.validationMessage);
    } else {
        hideError(formInputProfileName);
    }
};

formElementProfile.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

formInputProfileName.addEventListener('input', function () {
    checkInputValidity();
});
*/

/*
formInputProfileName.addEventListener('input', function (evt){
    console.log(evt.target.validity.valid);
})
*/

/*========================== =============================*/


