export function sum(a, b) {
	return a + b;
}
export function capitalString(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
	return string.split('').reverse().join('');
}

export function calculator(operator, a, b) {
	function add(a, b) {
		let sumAdd = a + b;
		return sumAdd;
	}
	function subtract(a, b) {
		let sumSubtract = a - b;
		return sumSubtract;
	}
	function multiply(a, b) {
		let sumMultiply = a * b;
		return sumMultiply;
	}
	function divide(a, b) {
		let sumDivide = a / b;

		return sumDivide;
	}

	if (operator === '+') {
		return add(a, b);
	} else if (operator === '-') {
		return subtract(a, b);
	} else if (operator === '*') {
		return multiply(a, b);
	} else if (operator === '/') {
		return divide(a, b);
	}
}

export function ceasarCipher(str, key) {
	let re = /^[a-zA-Z]/;
	let cipher = '';
	for (let i = 0; i < str.length; i++) {
		let addCipher = str[i];
		let code = str.charCodeAt(i);
		// console.log(str.charAt(i));
		if (re.test(addCipher) && code >= 65 && code <= 90) {
			cipher += String.fromCharCode((code - 65 + key) % 26 + 65);
		} else if (re.test(addCipher) && code >= 97 && code <= 122) {
			cipher += String.fromCharCode((code - 97 + key) % 26 + 97);
		} else {
			cipher += str.charAt(i);
		}
	}
	return cipher;
}

/* 
object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}; 

[1,8,3,4,2,6])

*/

export function analyzeArray(arr) { 
	let object = {};
	let average = 0;
	let min = 0;
	let max = 0;
	let length = 0;

	function averageVal(arr) {
		let averageCal = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

		average = averageCal(arr);
	}

	function minVal(arr) {
		min = Math.min.apply(Math, arr);
	}

	function maxVal(arr) {
		max = Math.max.apply(Math, arr);
	}

	function lengthVal(arr) {
		for (let i = 0; i < arr.length; i++) {
			length = arr.length;
		}
	}

	averageVal(arr);
	minVal(arr);
	maxVal(arr);
	lengthVal(arr); 
	return (object = {
		average: average,
		min: min,
		max: max,
		length: length
	});
}
