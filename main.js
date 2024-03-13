import { genarateRandomNr, compare } from './utils.js'

const randomNumber = genarateRandomNr(1, 20)
const msg="Nincs több tippelési lehetőséged!"
let attemptsRemaning=5

export function atempt(UserAns,randomNr){
    attemptsRemaning--
    document.getElementById("attemptsRemaning").innerHTML=attemptsRemaning
    if(UserAns!=randomNr){
        if(attemptsRemaning==0){
            document.querySelector("button").disabled=true
            document.querySelector('.msg').textContent = msg
        }
    } else {
			document.querySelector("button").disabled=true
		}
}

export function check(event) {
	event.preventDefault()
	const formData = new FormData(event.target)
	const inputNumber = parseInt(formData.get('number'))

	if (typeof inputNumber !== 'number') return

	const result = compare(inputNumber, randomNumber)
	document.querySelector('.msg').textContent = result
	atempt(inputNumber,randomNumber)
}

window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('#form').onsubmit = check
	document.getElementById("attemptsRemaning").innerHTML=attemptsRemaning
})