const auth = () => {
    'use strict';

    const buttonAuth = document.querySelector('.button-auth');
    const buttonOut = document.querySelector('.button-out');
    const userName = document.querySelector('.user-name');
    const modalAuth = document.querySelector('.modal-auth');
    const closeAuth = document.querySelector('.close-auth');
    const logInForm = document.getElementById('logInForm');
    const inputLogin = document.getElementById('login');
    const inputPassword = document.getElementById('password');
    const inputError = document.querySelector('.input-error');

    const login = (user) => {
        buttonAuth.style.display = 'none';
        buttonOut.style.display = 'block';
        modalAuth.style.display = 'none';
        userName.style.display = 'block';
        userName.textContent = user.login;
    };

    const logout = () => {
        buttonAuth.style.display = 'flex';
        buttonOut.style.display = 'none';
        userName.style.display = 'none';
        userName.textContent = '';
        localStorage.removeItem('user')
    };

    const validateInput = () => {
        if (inputLogin.value !== '') {
            inputLogin.style.border = '';
            inputError.style.display = 'none';
            return true
        } else {
            inputLogin.style.border = '1px solid red';
            inputError.style.display = 'block';
            return false;
        }
    };

    buttonAuth.addEventListener('click', () => {
        inputLogin.style.border = '';
        inputLogin.value = '';
        inputPassword.value = '';
        modalAuth.style.display = 'flex';
    });

    closeAuth.addEventListener('click', () => {
        modalAuth.style.display = 'none';
        inputLogin.value = '';
        inputPassword.value = '';
        inputLogin.style.border = '';
        inputError.style.display = 'none';
    });

    logInForm.addEventListener('submit', (evt) => {
        evt.preventDefault();

        if (validateInput()) {
            const user = {
                login: inputLogin.value,
                password: inputPassword.value
            };

            localStorage.setItem('user', JSON.stringify(user));

            login(user);
        } else {
            inputLogin.style.border = '1px solid red';
        }

    });

    buttonOut.addEventListener('click', logout);

    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')));
    }

};

export default auth;