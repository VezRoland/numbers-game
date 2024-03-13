import { genarateRandomNr, compare } from './utils.js'

const randomNumber = genarateRandomNr(0, 20)
const msg="Nincs több tippelési lehetőséged!"
let atemptsRemaning=5

function atempt(UserAns,randomNr){
    atemptsRemaning--
    document.getElementById("atemptsRemaning").innerHTML=atemptsRemaning
    if(UserAns!=randomNr){
        if(atemptsRemaning==0){
            document.querySelector("button").disabled=true
            document.querySelector('.msg').textContent = msg
        }
    }
}

function check(event) {
	event.preventDefault()
	const formData = new FormData(event.target)
	const inputNumber = parseInt(formData.get('number'))

	if (typeof inputNumber !== 'number') return

	const result = compare(inputNumber, randomNumber)
	document.querySelector('.msg').textContent = result
	atempt(inputNumber,randomNumber)
}

document.querySelector('#form').onsubmit = check