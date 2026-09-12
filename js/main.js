document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      navbar.style.background = 'rgba(25, 25, 46, 0.95)';
    } else {
      navbar.style.background = 'rgba(25, 25, 46, 0.8)';
    }
    
    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Sticky header on scroll past hero
  const hero = document.querySelector('.hero');
  let headerOriginalBackground = '';

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > hero.offsetHeight) {
      navbar.style.cssText = 'background: rgba(25, 25, 46, 0.95) !important; backdrop-filter: blur(10px) !important;';
    } else {
      navbar.style.cssText = 'background: rgba(25, 25, 46, 0.8) !important; backdrop-filter: blur(10px) !important;';
    }
  });
});