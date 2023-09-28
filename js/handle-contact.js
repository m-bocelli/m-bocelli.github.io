window.onload = () => {
    document.getElementById('contact-form').addEventListener('submit', (ev) => {
        ev.preventDefault();
        (() => {
            emailjs.init('ztzlIyaNRAdIu1PhQ');
        })();

        const form_fields = {
            user_fname: document.getElementById('fname').value,
            user_lname: document.getElementById('lname').value,
            user_email: document.getElementById('email').value,
            user_phone: document.getElementById('phone').value,
            user_message: document.getElementById('message').value,
        };

//        if(validateEmail() && validatePhone()) {
        emailjs.send('contact_service', 'contact_form', form_fields)
            .then(res => console.log(`Email sent: ${res}`))
            .catch(err => console.log(`Error sending email: ${err}`));
//        }
    });
};

