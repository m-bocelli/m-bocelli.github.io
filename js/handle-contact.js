const user_fname = document.getElementById('user_fname');
const user_lname = document.getElementById('user_lname');
const user_email = document.getElementById('user_email');
const user_phone = document.getElementById('user_phone');
const user_message = document.getElementById('user_message');
const contact_form = document.getElementById('contact-form');
const email_error = document.querySelector('#user_email + span.form-error');
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
    
    if(validateEmail()) {
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

