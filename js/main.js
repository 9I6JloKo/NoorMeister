const burgerBtn = document.querySelector('.burger_button');
const checkbox = document.querySelector('#check');
const links = document.querySelector('#myLinks');
const spans = burgerBtn.querySelectorAll('span');
burgerBtn.addEventListener('click', burger);

function burger() {
    if(checkbox.checked) {
        links.style.display = "flex";
    } else {
        links.removeAttribute('style');
        for (let i = 0; i < spans.length; i++) {
            spans[i].removeAttribute('style');
        }
    }
}