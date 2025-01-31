// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Модальное окно
const modal = document.getElementById('modal');
const signupForm = document.getElementById('signup-form');
const closeModal = document.querySelector('.close');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Переключение отзывов (слайдер)
let testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function showNextTestimonial() {
    testimonials[index].classList.remove('active');
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add('active');
}

// Переключение отзывов каждые 4 секунды
setInterval(showNextTestimonial, 4000);