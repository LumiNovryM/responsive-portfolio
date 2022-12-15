// Toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');


// Event
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});