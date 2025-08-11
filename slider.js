// Бургер-меню
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Слайдер (если есть на странице)
const slider = document.querySelector('.slider');
if (slider) {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
    
    let currentIndex = 0;
    const slideCount = slide.length;
    
    // Создаём точки
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');
    dots[0].classList.add('active');
    
    function goToSlide(index) {
        currentIndex = index;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
    
    prev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        goToSlide(currentIndex);
    });
    
    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        goToSlide(currentIndex);
    });
    
    // Автопрокрутка
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        goToSlide(currentIndex);
    }, 5000);
}

// Форма
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (this.checkValidity()) {
            alert('Сообщение отправлено! (Подключим реальную отправку позже)');
            // Для реальной отправки: используй Formspree как раньше
        } else {
            alert('Пожалуйста, заполните все поля правильно.');
        }
    });
}