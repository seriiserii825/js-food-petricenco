export default function timer() {
	const deadline = '2021-12-29T15:50:00';
	const days = document.querySelector('#days');
	const hours = document.querySelector('#hours');
	const minutes = document.querySelector('#minutes');
	const seconds = document.querySelector('#seconds');
	const timer = document.querySelector('.timer');

	function getTimeRemaining(end_time) {
		const t = Date.parse(end_time) - new Date();
		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((t / (1000 * 60)) % 60);
		const seconds = Math.floor((t / 1000) % 60);
		return {
			t, days, hours, minutes, seconds
		}
	}

	function setTime(deadline) {
		let timerId = setInterval(updateTimer, 1000);
		updateTimer();

		function updateTimer() {
			const t = getTimeRemaining(deadline);
			days.innerHTML = setZero(t.days);
			hours.innerHTML = setZero(t.hours);
			minutes.innerHTML = setZero(t.minutes);
			seconds.innerHTML = setZero(t.seconds);
			if (t.t < 0) {
				timer.innerHTML = '';
				clearInterval(timerId);
				timer.insertAdjacentHTML('beforebegin', '<h3>Time is over!!!</h3>');
			}
		}
	}

	setTime(deadline);

	function setZero(num) {
		if (num > 0 && num < 10) {
			return `0${num}` + '';
		} else {
			return num + '';
		}
	}
}
