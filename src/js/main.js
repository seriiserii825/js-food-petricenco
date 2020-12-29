import Tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
document.addEventListener('DOMContentLoaded', () => {
	new Tabs('.tabheader', '.tabheader__item', '.tabcontent');
	timer();
	modal();
});
