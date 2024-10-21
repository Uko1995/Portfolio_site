const head = document.querySelector('.header');
window.addEventListener('scroll', () => { 
    if (window.scrollY > 40) {
        head.classList.add('header-scrolled');
        console.log('scrolled');
    } else {
        head.classList.remove('header-scrolled');
    }
});

