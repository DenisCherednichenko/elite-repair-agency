document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Сообщение отправлено! (В реальности подключим сервис для email)');
    // Здесь можно добавить код для реальной отправки, например, через fetch к API.
});