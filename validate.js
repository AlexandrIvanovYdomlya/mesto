
const obj = {
    formSelector: '.popup__form',//форма
    inputSelector: '.form__input',//поле ввода
    submitButtonSelector: '.form__submit',//кнопка отпраки
    inactiveButtonClass: '.form__submit_invalid',//дизейбл кнопки
    inputErrorClass: '.form__input_type_error',//модификатор инпутов
    errorClass: '.form__input-error_active'//спан
};

//Добавление слушателей каждой форме
const setEventListeners = (formElement, obj) => {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement =  formElement.querySelector(obj.submitButtonSelector);
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
const toggleButtonState = (inputList, buttonElement, obj) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(obj.inactiveButtonClass);
        console.log('disable work');
    } else {
        buttonElement.classList.remove(obj.inactiveButtonClass);
    }
}

const showInputError = (formElement, inputElement, errorMessage, obj) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//Найденная внутри формы ошибка
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);
};

const hideInputError = (formElement, inputElement, obj) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//Найденная внутри формы ошибка
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.errorClass);
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



const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    console.log(formList);
    formList.forEach((formElement) => {
        formElement.addEventListener((obj.submitButtonSelector), (evt) => {
            evt.preventDefault();
            console.log('disable work');
        });

        const fieldsetList = Array.from(formElement.querySelectorAll(obj.inputSelector));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);

        });


    });
};

enableValidation(obj);
console.log(obj);
