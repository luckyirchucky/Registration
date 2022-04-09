let Input = document.querySelector('#email');
let bttn = document.querySelector('#randEmail');

bttn.addEventListener('click', function(){
	let rslt='';
	let strr='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
	
	for (let i=0; i<6; i++){
		rslt += strr[getR(0, strr.length-1)];
	}
	
	rslt += '@gmail.com'
	
	Input.value=rslt;
});

function getR(min, max){
	return Math.floor(Math.random()*max-min+1)+min;
}