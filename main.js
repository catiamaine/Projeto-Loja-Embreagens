
// --- LÓGICA DO MENU MOBILE ---
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('#nav-menu li a').forEach(item => {
    item.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});