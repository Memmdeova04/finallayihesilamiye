const contactForm = document.getElementById('contactForm');
const backButton = document.getElementById('backButton');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name === '' || email === '' || message === '') {
        alert('Zəhmət olmasa bütün sahələri doldurun.');
    } else {
        alert(`Təşəkkürlər, ${name}! Mesajınız qəbul olundu.`);
        contactForm.reset();
    }
});
backButton.addEventListener('click', function() {
    window.location.href = 'index.html';
});
