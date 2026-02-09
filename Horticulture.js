// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Seasonal sales toggle (set to true or false)
const salesActive = true; // change to false to hide sales section

window.addEventListener('DOMContentLoaded', () => {
  const salesSection = document.getElementById('seasonal-sales');
  if (!salesActive) {
    salesSection.style.display = 'none';
  }
});

// Order form confirmation
const form = document.querySelector('#seasonal-sales form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you! Your order request has been submitted.");
  form.reset();
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('.section, header');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 200) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = "white";
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = "#FFD700"; // Taconic gold
    }
  });
});
