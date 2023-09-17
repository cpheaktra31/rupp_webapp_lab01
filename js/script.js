let btnToggle = document.getElementById('btnToggle');
let menuToggle = document.getElementById('navbarToggle');
btnToggle.addEventListener('click', (e) => {
    menuToggle.classList.toggle('show');
});