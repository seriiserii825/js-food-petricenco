import Tabs from "./modules/tabs";
import timer from "./modules/timer";
document.addEventListener('DOMContentLoaded', () => {
	new Tabs('.tabheader', '.tabheader__item', '.tabcontent');
	timer();
	const wrapper = document.querySelector('.offer__slider-wrapper');
	console.log(getComputedStyle(wrapper).boxShadow);
});
