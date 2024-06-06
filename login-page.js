const signUp_btn = document.querySelector('#signUp-btn');
const signIn_btn = document.querySelector('#signIn-btn');
const container = document.querySelector('.container');

signUp_btn.addEventListener('click', () => {
    container.classList.add("signUp-mode");
});

signIn_btn.addEventListener('click', () => {
    container.classList.remove("signUp-mode");
});