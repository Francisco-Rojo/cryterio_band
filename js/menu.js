const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
const navLinksEl = document.querySelectorAll('.nav__link');

hamburgerEl.addEventListener('click', () => {
	navEl.classList.toggle('nav--open');
	hamburgerEl.classList.toggle('hamburger--open');
});

navLinksEl.forEach( (navLink) =>  {
	navLink.addEventListener('click', () => {
		navEl.classList.remove('nav--open');
		hamburgerEl.classList.remove('hamburger--open');
	})
});
