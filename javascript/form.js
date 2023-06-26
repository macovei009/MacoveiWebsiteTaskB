//The code for the contact-form
// Selecting form elements and error messages


const form = document.querySelector('.callback-form');  
const nameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const storyInput = document.querySelector('#story');
const nameError = document.querySelector('#fullName + .field-error');
const emailError = document.querySelector('#email + .field-error');
const storyError = document.querySelector('#story + .field-error');

// Function to validate the name input field


function validateName() {
    if (nameInput.validity.valid) {
        nameError.textContent = '';
    } else {
        showNameError();
    }
}

// Function to display the name input error message

function showNameError() {
    nameError.textContent = 'Please enter your name';
}

// Function to validate the email input field

function validateEmail() {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
    } else {
        showEmailError();
    }
}

// Function to display the email input error message

function showEmailError() {
    if (emailInput.validity.valueMissing) {
        emailError.textContent = 'Please enter your email address';
    } else if(emailInput.validity.typeMismatch) {
        emailError.textContent = 'Your email address does not appear to be correct';
    }
}

// Function to validate the story input field

function validateStory() {
    if (storyInput.validity.valid) {
        storyError.textContent = '';
    } else {
        showStoryError();
    }
}

// Function to display the story input error message

function showStoryError() {
    storyError.textContent = 'Please enter your message';
}

// Function to validate the form before submission

function validateForm(event) {
    let formHasErrors = false;
    if (!nameInput.validity.valid) {
        formHasErrors = true;
        showNameError();
    }

    if(!emailInput.validity.valid){
        formHasErrors = true;
        showEmailError();
    }

    if(!storyInput.validity.valid){
        formHasErrors = true;
        showStoryError();
    }

    if(formHasErrors){
        event.preventDefault();
    }
}

// Event listeners for input fields to trigger validation on input

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
storyInput.addEventListener('input', validateStory);


// Event listener for form submission to validate the form

form.addEventListener('submit', validateForm);

