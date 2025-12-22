// Call Elements
var icon = document.getElementById('icon');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Light & Dark Mode
icon.onclick = function () {
  document.body.classList.toggle('dark-theme');
  if (icon.name === 'moon') {
    icon.name = 'sunny';
  } else {
    icon.name = 'moon';
  }
};

// NavBar Shadow Setup
window.onscroll = function () {
  if (document.documentElement.scrollTop > 0) {
    document.getElementById('navbar').classList.add('scroll');
  } else {
    document.getElementById('navbar').classList.remove('scroll');
  }
};

// Close menu after choosing any option
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});

// Scoll Animation Setup
AOS.init({
  duration: 800,
  once: true,
});
