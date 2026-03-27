const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
        header.classList.remove('text-white', 'bg-transparent', 'border-white/10');
    } else {
        header.classList.remove('header-scrolled');
        header.classList.add('text-white', 'bg-transparent', 'border-white/10');
    }
});