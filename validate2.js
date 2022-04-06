function enableValidation() {
    const form =document.querySelector('.popup__form[name="profile"]');

    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('input', handleFormInput);
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
    set
}

function setCustomError(input) {
    const validity = input.validity;

    input.setCustomValidity('');

    if (validity.tooShort || validity.tooLong) {
        const currentLength = input.value.length;
        const min = input.getAttribute('minlength');
        const max = input.getAttribute('maxlength');
        input.setCustomValidity(
            `Строка имеет неверную длинну. Введено ${currentLength} символов, а должно быть от ${min} до ${max}`
        );
    }

    if (input.typeMismatch) {
        input.setCustomValidity('Это не ссылка')
    }
}

function setFieldError (input) {
    const span = document.querySelector(`#${input.id}-error`);
    span.textContent = input.validationMessage;
}


enableValidation();