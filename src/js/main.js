import Tabs from "./modules/tabs";
document.addEventListener('DOMContentLoaded', () => {
	new Tabs('.tabheader', '.tabheader__item', '.tabcontent');
});
