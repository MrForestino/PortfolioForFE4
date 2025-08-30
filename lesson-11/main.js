//? ДЗ-35(11):

//? Завдання 1
//* Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. 
//* При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.

const startTimer = document.getElementById('start');
const stopTimer = document.getElementById('stop');
const resetTimer = document.getElementById('reset');


let minutes = 60 * 60;

let h = Math.floor(minutes / 3600);
let m = Math.floor((minutes % 3600) / 60);
let s = Math.floor((minutes % 3600) % 60);

let timerReverse = null;


const time = document.getElementById('time');
time.textContent = 	
	String(h).padStart(2, '0') + ':' +
	String(m).padStart(2, '0') + ':' +
	String(s).padStart(2, '0');

function startTimerFunction() {

	if (timerReverse) return;

	timerReverse = setInterval(function() {
	minutes--;
	let h = Math.floor(minutes / 3600);
	let m = Math.floor((minutes % 3600) / 60);
	let s = Math.floor((minutes % 3600) % 60);

	time.textContent = 
	String(h).padStart(2, '0') + ':' +
	String(m).padStart(2, '0') + ':' +
	String(s).padStart(2, '0');
	if(minutes === 30 * 60) {
		const h2 = document.querySelector('h2');
		h2.style.display = 'block';
	}
	if(minutes === 29 * 60) {
		const h2 = document.querySelector('h2');
		h2.style.display = 'none';
	}
	if (minutes <= 0) {
		clearInterval(timerReverse);
		return;
	}
	console.log(minutes);
	}, 1000);
}

startTimer.addEventListener('click', startTimerFunction);

stopTimer.addEventListener('click', function() {
	clearInterval(timerReverse);
	timerReverse = null;
});

resetTimer.addEventListener('click', function() {
	clearInterval(timerReverse);
	timerReverse = null;
	minutes = 60 * 60;
	time.textContent = 	
	String(h).padStart(2, '0') + ':' +
	String(m).padStart(2, '0') + ':' +
	String(s).padStart(2, '0');
	document.querySelector('h2').style.display = 'none';
});

//? Завдання 2
//* Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну секунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.
let min = 0;
let sec = 10;

const timer = document.getElementById('timer');
timer.textContent = 	
	String(min).padStart(2, '0') + ':' +
	String(sec).padStart(2, '0');

let timerId = setInterval(function() {

sec--;
timer.textContent = 	
	String(min).padStart(2, '0') + ':' +
	String(sec).padStart(2, '0');
if (sec <= 10) {
  timer.classList.add("red-blink");
}
if (sec <= 5) {
  timer.classList.add("pulse");
}
if (sec <= 0) {
	clearInterval(timerId);
const btnStart =	document.getElementById('startTimer');
const btnStop =	document.getElementById('stopTimer');

btnStop.classList.add("disabled");
btnStart.classList.add("disabled");;

}
console.log(sec);

}, 1000);

// !======================================

// let seconds = 0;

// let timerId = setInterval(function() {

// seconds++;
// if (seconds >= 11) {
// 	return;
// }
// console.log(seconds);

// }, 1000);

console.log("==============================")

