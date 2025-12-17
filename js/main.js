// Light & Dark Mode
var icon = document.getElementById('icon');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });
    bsCollapse.hide();
  });
});


icon.onclick = function () {
  document.body.classList.toggle('dark-theme');

  // Change icon between moon/sun
  if (icon.name === 'moon') {
    icon.name = 'sunny';
  } else {
    icon.name = 'moon';
  }
};

// Scoll Animation Setup
AOS.init({
  duration: 800,
  once: true,
});

// NavBar Shadow Setup
window.onscroll = function () {
  if (document.documentElement.scrollTop > 0) {
    document.getElementById('navbar').classList.add('scroll');
  } else {
    document.getElementById('navbar').classList.remove('scroll');
  }
};

// Make background video slower
document.getElementById('back-video').playbackRate = 0.8;
