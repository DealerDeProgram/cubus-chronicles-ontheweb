function copyIP() {
  const ip = document.getElementById('serverIp').textContent;

  navigator.clipboard.writeText(ip).then(() => {
    const button = document.querySelector('.copy-btn');
    const original = button.textContent;

    button.textContent = 'Copied!';
    button.style.background = '#16a34a';

    setTimeout(() => {
      button.textContent = original;
      button.style.background = '';
    }, 1800);
  });
}

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        {
          duration: 650,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'forwards'
        }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .rule-card, .mod-item, .gallery-grid img, .discord-card').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});
