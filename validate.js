
const obj = {
    formSelector: '.popup__form',//форма
    inputSelector: '.form__input',//поле ввода
    submitButtonSelector: '.form__submit',//кнопка отпраки
    inactiveButtonClass: '.form__submit_invalid',//дизейбл кнопки
    inputErrorClass: '.form__input_type_error',//модификатор инпутов
    errorClass: '.form__input-error_active'//спан
};

//Добавление слушателей каждой форме
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(enableValidation['inputSelector']));
    const buttonElement =  formElement.querySelector(enableValidation['submitButtonSelector']);
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
        buttonElement.classList.add(enableValidation['inactiveButtonClass']);
    } else {
        buttonElement.classList.remove(enableValidation['inactiveButtonClass']);
    }
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//Найденная внутри формы ошибка
    inputElement.classList.add(enableValidation['inputErrorClass']);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(enableValidation['errorClass']);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//Найденная внутри формы ошибка
    inputElement.classList.remove(enableValidation['inputErrorClass']);
    errorElement.classList.remove(enableValidation['errorClass']);
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
    const formList = Array.from(document.querySelectorAll(enableValidation['formSelector']));
    formList.forEach((formElement) => {
        formElement.addEventListener((enableValidation['submitButtonSelector']), (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll(enableValidation['inputSelector']));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        });


    });
};

enableValidation(obj);


/*
 const formList = Array.from(document.querySelectorAll());//'.form[name="profile"]'
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
 */