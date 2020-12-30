export default class Card {
    constructor(title, img, text, price) {
        this.title = title;
        this.img = img;
        this.text = text;
        this.price = price;
    }

    render() {
        const parent = document.querySelector('.menu__field .container');
        const div = document.createElement('div');
        const html = `
            <img src="${this.img}" alt="vegy">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
        div.classList.add('menu__item');
        div.innerHTML = html;
        parent.append(div);
    }
};