// Section animation
const sections = document.querySelectorAll('.god-section');
const io = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('in-view');
    else entry.target.classList.remove('in-view');
  });
}, {threshold:0.3});
sections.forEach(s => io.observe(s));

// Smooth scroll for nav & learn more buttons
document.querySelectorAll('.nav-link, .btn-mini').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const targetId = btn.dataset.target || btn.dataset.scroll;
    const target = document.getElementById(targetId);
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// === NAVBAR VISIBILITY LOGIC ===
const navbar = document.querySelector('.nav');
let lastScrollY = 0;
let hideTimeout;

// Show navbar when at top
window.addEventListener('scroll', () => {
  if (window.scrollY < 100) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
});

// Show navbar on mouse move (even if scrolled)
window.addEventListener('mousemove', () => {
  navbar.classList.remove('hidden');
  clearTimeout(hideTimeout);
  if (window.scrollY > 100) {
    hideTimeout = setTimeout(() => {
      navbar.classList.add('hidden');
    }, 2000); // 2 seconds after no movement
  }
});




