function enableValidation() {
    const form =document.querySelector('.popup__form[name="profile"]');

    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('input', handleFormInput);

    const form2 =document.querySelector('.popup__form[name="card"]');

    form2.addEventListener('submit', handleFormSubmit);
    form2.addEventListener('input', handleFormInput);
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const isValid = form.checkValidity();

    if (isValid) {
        alert('form is valid');
    } else {
        alert('form not valid');
    }
}

function handleFormInput (event) {
    const form = event.currentTarget;
    const input = event.target;

    //1. Найти невалидные поля и установить тексты ошибок
    setCustomError(input);
    //2. Показать ошибки пользователя
    setFieldError(input);
    //3. Деактивировать кномку когда форма невалидна
    setSubmitButtonState(form);
}

function setCustomError(input) {
    const validity = input.validity;

    input.setCustomValidity('');

    if (validity.tooShort || validity.tooLong) {
        const currentLength = input.value.length;
        const min = input.getAttribute('minlength');
        const max = input.getAttribute('maxlength');
        let errorMessage = `Строка имеет неверную длинну. Введено ${currentLength} символов, а должно быть от ${min}`

        if (max) {
            errorMessage += `до ${max}`;
        }
        input.setCustomValidity();
    }

    if (input.typeMismatch) {
        input.setCustomValidity('Это не ссылка')
    }
}

function setFieldError (input) {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
}

function setSubmitButtonState(form) {
    const button = form.querySelector('.form__submit');
    const isValid = form.checkValidity();

    if (isValid) {
        button.classList.add('form__submit_valid')
        button.classList.remove('form__submit_invalid')
        button.removeAttribute('disabled');
    } else {
        button.classList.add('form__submit_invalid')
        button.classList.remove('form__submit_valid')
        button.setAttribute('disabled', 'disabled');
    }
}

enableValidation();