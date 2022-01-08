
import { Tooltip, Dropdown } from 'bootstrap';


// Tooltips initialization
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = tooltipTriggerList.forEach((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));



// Site navigation
const navMain = document.querySelector('.site-nav');
const navToggles = document.querySelectorAll('.nav-toggle');

navToggles.forEach((navToggle) => {
	navToggle.addEventListener('click', () => {
		navMain.classList.toggle('site-nav--closed');
	});
})
