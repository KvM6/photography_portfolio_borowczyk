let backgroundImgs;
let navbar;
let title;
let navLinks;
let navAbout;
let navContact;
let aboutMe;
let contact;
let arrowMobileAbout;
let arrowMobileContact;
let slideIndex;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	backgroundImgs = document.querySelectorAll(".img-head");
	navbar = document.querySelector(".navbar");
	title = document.querySelector(".title");
	navLinks = document.querySelectorAll(".nav-link");
	navAbout = document.querySelector(".nav-link-about");
	navContact = document.querySelector(".nav-link-contact");
	aboutMe = document.querySelector(".about-me");
	contact = document.querySelector(".contact");
    arrowMobileAbout = document.querySelector('.back-about')
	arrowMobileContact = document.querySelector('.back-contact')
	slideIndex = 0;
};

const prepareDOMEvents = () => {
	carousel();

	navAbout.addEventListener("click", aboutSection);
	navAbout.addEventListener("click", navbarAction);
    arrowMobileAbout.addEventListener('click', aboutSection)
    arrowMobileAbout.addEventListener('click', navbarAction)
	navContact.addEventListener('click', contactSection)
	navContact.addEventListener('click', navbarAction)
	arrowMobileContact.addEventListener('click', contactSection)
	arrowMobileContact.addEventListener('click', navbarAction)
};

const carousel = () => {
	let i;
	for (i = 0; i < backgroundImgs.length; i++) {
		// backgroundImgs[i].style.display = 'none';
		backgroundImgs[i].style.opacity = '0';
	}
	slideIndex++;
	if (slideIndex > backgroundImgs.length) {
		slideIndex = 1;
	}
	// backgroundImgs[slideIndex-1].style.display = 'block';
	backgroundImgs[slideIndex - 1].style.opacity = '1';
	setTimeout(carousel, 6000);
};

const aboutSection = () => {
	aboutMe.classList.toggle("opacity-1");
	aboutMe.classList.toggle("opacity-0");
	aboutMe.classList.toggle("z-20");
};

const contactSection = () => {
	contact.classList.toggle('opacity-0')
	contact.classList.toggle('opacity-1')
	contact.classList.toggle('z-20')
}

const navbarAction = () => {
    navbar.classList.toggle('opacity-0')
    navbar.classList.toggle('translate-y-center')
    navbar.classList.toggle('-translate-y-full')
}

document.addEventListener("DOMContentLoaded", main);
