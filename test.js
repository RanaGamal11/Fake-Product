const email = 'admin@admin.com';
const password = 'admin';

// Show or hide password based on the checkbox state
document.getElementById('tcheck').addEventListener('change', function () {
    const passwordInput = document.getElementById('inputPassword');
    passwordInput.type = this.checked ? 'text' : 'password';
});

// Login button click event
document.getElementById('button').addEventListener('click', function () {
    const enterEmail = document.getElementById('inputEmail').value.trim();
    const enterPassword = document.getElementById('inputPassword').value.trim();

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Clear previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    // Validate email
    if (!enterEmail) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (enterEmail !== email) {
        emailError.textContent = 'Incorrect email.';
        isValid = false;
    }

    // Validate password
    if (!enterPassword) {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (enterPassword !== password) {
        passwordError.textContent = 'Incorrect password.';
        isValid = false;
    }

    // If both fields are valid, proceed to login
    if (isValid) {
        alert('Login successful');
        window.location.href = 'products.html'; // Redirect to products page
    }
});
