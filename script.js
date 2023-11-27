const popup = document.querySelector('#popup');

function openPopup() {
    console.log(popup)
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup');
}
