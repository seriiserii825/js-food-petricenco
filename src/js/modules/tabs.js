export default class Tabs {
    constructor(tabsHeaderElem, tabsHeaderItemsElem, tabsContentItemsELem) {
        this.tabsHeader = document.querySelector(tabsHeaderElem);
        this.tabsHeaderItems = document.querySelectorAll(tabsHeaderItemsElem);
        this.tabsHeaderItemsClass = tabsHeaderItemsElem.replace(/\./, '');
        this.tabsContentItems = document.querySelectorAll(tabsContentItemsELem);
        this.events();
    }

    events() {
        this.hideTabs();
        this.showTabs();
        this.tabsHeader.addEventListener('click', (e) => {
            const target = e.target;
            if(target && target.classList.contains(this.tabsHeaderItemsClass + '')){
                this.hideTabs();
                this.tabsHeaderItems.forEach((item, i) => {
                    if (item === target) {
                        this.showTabs(i);
                    }
                });
            }
        });
    }

    hideTabs() {
        this.tabsContentItems.forEach(item => {
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        });
        this.tabsHeaderItems.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    showTabs(i = 0) {
        this.tabsContentItems[i].classList.remove('hide');
        this.tabsContentItems[i].classList.add('show', 'fade');
        this.tabsHeaderItems[i].classList.add('tabheader__item_active');
    }
}
