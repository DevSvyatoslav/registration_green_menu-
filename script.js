let form = document.querySelector('form');
let modal = document.getElementById('modal');
let modalCloseBtn = document.getElementById('modal-close');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    modal.classList.add('active');
    form.reset();
});

modalCloseBtn.addEventListener('click', function () {
    modal.classList.remove('active');
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

let langBtn = document.getElementById('langBtn');
let lang = 'ru';

langBtn.addEventListener('click', function () {
    if (lang === 'ru') {
        lang = 'en';
        langBtn.textContent = 'RU';
    } else {
        lang = 'ru';
        langBtn.textContent = 'EN';
    }

    let items = document.querySelectorAll('[data-ru]');
    for (let i = 0; i < items.length; i++) {
        items[i].textContent = items[i].getAttribute('data-' + lang);
    }
});
