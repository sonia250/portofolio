/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active navigation link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.navi a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Animate skill levels
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.setProperty('--skill-level', level + '%');
        setTimeout(() => {
            skill.style.width = level + '%';
        }, 500);
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Add animation to cards
    const cards = document.querySelectorAll('.education-card, .experience-card, .skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
});