window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed')
    }
}


const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


const modal = document.getElementById('modal');
const modalContent = modal.querySelector('div');

document.getElementById('openModal').addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
});

document.getElementById('closeModal').addEventListener('click', () => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
});

// click outside to close
modal.addEventListener('click', (e) => {
    if (!modalContent.contains(e.target)) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }
});