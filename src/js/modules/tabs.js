export default class Tabs {
    constructor(tabsHeaderElem, tabsHeaderItemsElem, tabsContentItemsELem) {
        this.tabsHeader = document.querySelector(tabsHeaderElem);
        this.tabsHeaderItems = document.querySelector(tabsHeaderItemsElem);
        this.tabsContentItems = document.querySelector(tabsContentItemsELem);
        this.events();
    }

    events() {
        this.tabsHeader.addEventListener('click', (e) => {
            const target = e.target;
            this.hideTabs();
            this.tabsHeaderItems.forEach((item, i) => {
                if (item == target) {
                    showTabs();
                }
            });
        });
    }

    hideTabs() {
        this.tabsContentItems.forEach(item => {
            item.style.display = 'none';
        });
        this.tabsHeaderItems.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    showTabs(i = 0) {
        this.tabsContentItems[i].style.display = 'block';
        this.tabsHeaderItems[i].classList.remove('tabheader__item_active');
    }
}