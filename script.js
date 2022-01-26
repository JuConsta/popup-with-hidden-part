let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

let hiddenPopup = document.querySelector('.hidden-popup');
let openHiddenPopupButton = document.querySelector('.open-hidden-popup');
let buttonSubmit = document.querySelector('.button-submit');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
    hiddenPopup.classList.add('hide');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

openHiddenPopupButton.onclick = function() {
    hiddenPopup.classList.remove('hide');
    buttonSubmit.focus();
};