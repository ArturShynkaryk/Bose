const overlay = document.querySelector('.menu');
const btn = document.querySelector('.btn') ;
const close = document.querySelector('.close');
const body = document.querySelector('body');




btn.addEventListener('click', function () {
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden';
})


close.addEventListener('click', function (e) {
    e.stopPropagation();
})

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
})

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    body.style.overflow = 'auto';
})