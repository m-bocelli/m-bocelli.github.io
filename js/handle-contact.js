const user_fname = document.getElementById('user_fname');
const user_lname = document.getElementById('user_lname');
const user_email = document.getElementById('user_email');
const user_phone = document.getElementById('user_phone');
const user_message = document.getElementById('user_message');
const contact_form = document.getElementById('contact-form');

const fname_error = document.querySelector('#user_fname + span.form-error');
const lname_error = document.querySelector('#user_lname + span.form-error');
const email_error = document.querySelector('#user_email + span.form-error');
const phone_error = document.querySelector('#user_phone + span.form-error');
const message_error = document.querySelector('#user_message + span.form-error');

// format: any_text_except_whitespace@any_text_except_whitespace.any_text_except_whitespace
const email_regex = /^\S{1,}[@]\S{1,}[.]\S{1,}$/g; 

// format: 3 digits - 3 digits - 4 digits
const phone_regex = /^[0-9]\d{2}-[0-9]\d{2}-[0-9]\d{3}$/g; 

contact_form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    (() => {
        emailjs.init('ztzlIyaNRAdIu1PhQ');
    })();

    const form_fields = {
        user_fname: user_fname.value,
        user_lname: user_lname.value,
        user_email: user_email.value,
        user_phone: user_phone.value,
        user_message: user_message.value
    };
   
    const valid_fname = validateFName();
    const valid_lname = validateLName();
    const valid_message = validateMessage();
    const valid_email = validateEmail();
    const valid_phone = validatePhone();

    if(valid_email && valid_phone) {
        emailjs.send('contact_service', 'contact_form', form_fields)
            .then(() => console.log(`Email sent.`))
            .catch(err => console.log(`Error sending email: ${err}`));
    } else {
        console.log('invalid form');
    }
});

function validateEmail() {
    const is_format = email_regex.test(user_email.value); 
    const is_empty = user_email.value.length < 1;
    const is_valid = is_format && !is_empty;

    if (is_valid) {
        email_error.textContent = '';
        email_error.className = 'form-error';
    } else if (!is_format && !is_empty) {
        email_error.textContent = 'Required format: <username>@<domain>.<top-level domain>'; 
        email_error.className = 'form-error active';
    } else {
        email_error.textContent = 'Email is required.';
        email_error.className = 'form-error active';
    }

    return is_valid;
}

function validatePhone() {
    const is_format = phone_regex.test(user_phone.value); 
    const is_empty = user_phone.value.length < 1;
    const is_valid = is_format && !is_empty;

    if (is_valid) {
        phone_error.textContent = '';
        phone_error.className = 'form-error';
    } else if (!is_format && !is_empty) {
        phone_error.textContent = 'Required format: XXX-XXX-XXXX, where X is 0-9';
        phone_error.className = 'form-error active';
    } else {
        phone_error.textContent = 'A phone number is required.';
        phone_error.className = 'form-error active';
    }

    return is_valid;
}
