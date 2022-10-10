const images = document.querySelectorAll('.img-settings');
const modal = document.querySelector('.modal-container');
const modalImg = document.querySelector('#modal-img');
const btnClose = document.querySelector('#btn-close');

let sourceImage = '';

images.forEach(image => {
    image.addEventListener('click', () => {
        sourceImage = image.getAttribute('src');
        modalImg.setAttribute('src', sourceImage);
        modal.classList.toggle('modal-activate');
    });
});

btnClose.addEventListener('click', () => {
    modal.classList.toggle('modal-activate');
})