export default function modal() {
	const modal = document.querySelector('[data-modal]');
	const modalClose = document.querySelector('[data-modal-close]');
	const modalOpen = document.querySelectorAll('[data-modal-open]');

	function closeModal() {
		modal.classList.remove('show', 'fade');
		modal.classList.add('hide');
	}

	function showModal() {
		modal.classList.remove('hide');
		modal.classList.add('show', 'fade');
	}

	modalClose.addEventListener('click', closeModal);

	modalOpen.forEach(item => {
		item.addEventListener('click', showModal);
	});

}
