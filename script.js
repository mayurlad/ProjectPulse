// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Example popup alert on 'Get Started' button click
  document.querySelector('.btn.btn-danger')?.addEventListener('click', () => {
    alert("Let's get started with ProjectPulse! 🚀");
  });
  
  // Optional: Hover effect to scale cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.03)';
      card.style.transition = 'transform 0.2s';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
  