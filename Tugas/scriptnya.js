// Toggle menu 
const burgerMenu = document.getElementById('burgerMenu');
const navbar = document.getElementById('navbar');

burgerMenu.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

// Tutup menu 
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Tombol menu 
document.querySelector('.hero button').addEventListener('click', function() {
    const menuSection = document.querySelector('#menu');
    
    window.scrollTo({
        top: menuSection.offsetTop - 20,
        behavior: 'smooth'
    });
});

// Efek animasi saat scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Animasinya
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    
    // style animasi setiap sektor
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animasi nya
    setTimeout(function() {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});

