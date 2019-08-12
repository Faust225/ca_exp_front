let input = prompt();

let celsius = parseFloat(input);

const result = celsius + ' C is ' + (celsius + 273.15) + ' Kelvin';

if (celsius >= 10 && celsius <= 30) {
	document.body.innerHTML = result + ' , which is normal';
} else if(celsius < 10) {
	document.body.innerHTML = result + ' , which is very cold';
} else {
	document.body.innerHTML = result + ' , which is very hot';
}