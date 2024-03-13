import { genarateRandomNr, compare } from './utils.js'

const randomNumber = genarateRandomNr(0, 20)

function check(event) {
	event.preventDefault()
	const formData = new FormData(event.target)
	const inputNumber = parseInt(formData.get('number'))

	if (typeof inputNumber !== 'number') return

	const result = compare(inputNumber, randomNumber)
	document.querySelector('.msg').textContent = result
}

document.querySelector('#form').onsubmit = check