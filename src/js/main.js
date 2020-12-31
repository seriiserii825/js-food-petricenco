import Tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import cards from "./modules/cards";
import formPost from './modules/formPost/formPost';
document.addEventListener('DOMContentLoaded', () => {
    new Tabs('.tabheader', '.tabheader__item', '.tabcontent');
    timer();
    modal();
    cards();
    formPost();
});