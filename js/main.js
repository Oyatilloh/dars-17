/*const promiseData = new Promise(function(resolve reject)){
	setTimeout(
		( => {
			resolve("Salom")
		},
		3*1000
		))
}*/


/*const inputElement = document.querySelector('input')

let intervel

button.addEventListener('click', event => {
	const inputValue = inputElement.value
	input.target.disable = true
	event.target.disable = true
	let number = Number(inputValue)
	const pElement = document.creatElement('p')
	document.body.appendChild(pElement)
	intervel = setInterval(
		function(){
			if(number < 1){
				clearIntervel(intervel)
				alert("Tamom")
				inputElement.disable = false
				event.target.disable = false
			} else {
				number--
				pElement.textContent = number

			}
		}, 
		1000
		)
})*/

const inputElement1 = document.querySelector('input_element1')
const inputElement2 = document.querySelector('input_element2')
const formElement = document.querySelector('#formElement')
const button = document.querySelector('button')

let intervel

button.addEventListener('click', event => {

	input_element1.disable = true
	input_element2.disable = true
	event.target.disable = true
	let number1 = Number(input_element1.value)
	let number2 = Number(input_element2.value)

	const pElement = document.createElement('p')

	document.body.appendChild(pElement)
	intervel = setInterval(() => 
		{
			if(number1 == number2){
				clearIntervel(intervel)
				alert("Tamom")
				inputElement1.disable = false
				inputElement2.disable = false
				event.target.disable = false
			} else if ( number1 < number2){
				number1++
				pElement.textContent = number1

			} else if (number1 > number2){

				alert("Yoshbolamanmi")
			}
		}, 
		1000
		)
})