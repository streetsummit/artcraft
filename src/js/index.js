
import { Tooltip, Dropdown } from 'bootstrap';


// Tooltips initialization
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new Tooltip(tooltipTriggerEl)
})



// Site navigation
const navMain = document.querySelector('.site-nav');
const navToggles = document.querySelectorAll('.nav-toggle');

navToggles.forEach((navToggle) => {
	navToggle.addEventListener('click', function () {
		navMain.classList.toggle('site-nav--closed');
	});
})