// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
});

// Scroll animation for cards and sections
window.addEventListener('scroll', () => {
  // Animate feature cards
  const cards = document.querySelectorAll('.feature-card, .testimonial-card');
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });

  // Animate section titles
  const titles = document.querySelectorAll('.section-title');
  titles.forEach(title => {
    const rect = title.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      title.style.opacity = 1;
      title.style.transform = 'translateY(0)';
    }
  });
});

// Form submission with validation
const form = document.querySelector('.subscribe-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    
    if (validateEmail(email)) {
      // Show success message (in a real app, you'd send this to a server)
      alert('Thank you for subscribing!');
      form.reset();
    } else {
      alert('Please enter a valid email address');
    }
  });
}

// Email validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

