const form = document.querySelector('#newsletter-form');
const submittedEmail = document.querySelector('#submitted-email');
const signup = document.querySelector('#signup');
const success = document.querySelector('#success');
const dismiss = document.querySelector('#dismiss');

function updateSuccessMessage(email) {
    // Update strong tag with email
    submittedEmail.textContent = email;
}

function switchSections() {
    signup.classList.toggle('hidden');
    success.classList.toggle('hidden');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = form.querySelector('#email');
    updateSuccessMessage(email.value);
    switchSections();
})

dismiss.addEventListener('click', function() {
    switchSections();
    updateSuccessMessage(' ');
})