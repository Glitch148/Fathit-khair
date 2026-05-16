const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
  particle.style.animationDelay = Math.random() * 15 + 's';
  particle.style.width = Math.random() * 4 + 2 + 'px';
  particle.style.height = particle.style.width;
  particlesContainer.appendChild(particle);
}

const neonBg = document.getElementById('neonBg');
for (let i = 0; i < 50; i++) {
  const dot = document.createElement('div');
  dot.className = 'neon-dot';
  dot.style.left = Math.random() * 100 + '%';
  dot.style.animationDuration = (Math.random() * 15 + 10) + 's';
  dot.style.animationDelay = Math.random() * 20 + 's';
  const size = Math.random() * 3 + 2;
  dot.style.width = size + 'px';
  dot.style.height = size + 'px';
  neonBg.appendChild(dot);
}

const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
fadeElements.forEach(el => fadeObserver.observe(el));

const scrollTop = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('visible', window.scrollY > 500);
});
scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const typewriterElement = document.getElementById('typewriter');
const words = ['فتحة خير', 'للتوصيل السريع', 'نوصلك في أقل من 30 دقيقة'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 80;
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 150;
  }
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typingSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500;
  }
  setTimeout(typeWriter, typingSpeed);
}

typeWriter();
