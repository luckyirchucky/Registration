let resultInput = document.querySelector('#phone');
let button = document.querySelector('#randPhone');

button.addEventListener('click', function(){
	let result='+7(';
	let str='0123456789';
	
	for (let i=3; i<6; i++){
		result += str[getRandom(0, str.length-1)];
	}
	
	result += ')';
	
	for (let i=7; i<10; i++){
		result += str[getRandom(0, str.length-1)];
	}
	
	result += '-';
	
	for (let i=11; i<13; i++){
		result += str[getRandom(0, str.length-1)];
	}
	
	result += '-';
	
	for (let i=14; i<16; i++){
		result += str[getRandom(0, str.length-1)];
	}
	
	resultInput.value=result;
});

function getRandom(min, max){
	return Math.floor(Math.random()*max-min+1)+min;
}