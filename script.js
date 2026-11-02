
// 1. Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function () {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. Contact form validation
const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        alert('Thank you, ' + name + '! Your message has been submitted.');
        contactForm.reset();
    });
}

// 3. Back to top button
const backToTop = document.createElement('button');

backToTop.textContent = '↑';
backToTop.id = 'backToTop';
backToTop.title = 'Back to Top';

document.body.appendChild(backToTop);

backToTop.style.display = 'none';

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 4. Welcome message
console.log('Welcome to Samiksha Late Portfolio!');
