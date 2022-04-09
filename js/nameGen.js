let rInput = document.querySelector('#name');
let butn = document.querySelector('#randName');

butn.addEventListener('click', function(){
	let res='';
	let str='QWERTYUIOPASDFGHJKLZXCVBNM';
	let str2='0123456789qwertyuiopasdfghjklzxcvbnm';
	
	for (let i=0; i<1; i++){
		res += str[getRandom(0, str.length-1)];
	}
	
	for (let i=1; i<8; i++){
		res += str2[getRand(0, str.length-1)];
	}
	
	rInput.value=res;
});

function getRand(min, max){
	return Math.floor(Math.random()*max-min+1)+min;
}