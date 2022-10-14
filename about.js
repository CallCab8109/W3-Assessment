console.log("hello world");
const img1 = document.querySelector('#img1')


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully (obviously)')
}

function alert2 () {
	alert('You\'re such a clever little one')
}
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
img1.addEventListener('mouseover', alert2)