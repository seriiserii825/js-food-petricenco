export default function modal() {
    const modalClose = document.querySelector('[data-modal-close]');
    const modalOpen = document.querySelectorAll('[data-modal-open]');
    const modal = document.querySelector('.modal');

    function closeModal() {
        modal.classList.remove('show', 'fade');
        modal.classList.add('hide');
    }

    // const modalTimerId = setTimeout(showModal, 2000);

    function showModal() {
        modal.classList.remove('hide');
        modal.classList.add('show', 'fade');
        // clearTimeout(modalTimerId);
    }

    function showModalOnScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener('scroll', showModalOnScroll);
        }
    }

    modalClose.addEventListener('click', closeModal);

    modalOpen.forEach(item => {
        item.addEventListener('click', showModal);
    });

    // window.addEventListener('scroll', showModalOnScroll);
}