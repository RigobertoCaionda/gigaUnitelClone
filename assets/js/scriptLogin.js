if(localStorage.getItem('customer') === null){
	window.location = 'startingPage.html';
}
let close = document.querySelector('.X');
close.addEventListener('click',()=>{
	window.location = 'index.html';
});
let fazerLogin = document.querySelector('#fazerLogin');
fazerLogin.addEventListener('click',()=>{
	let number = prompt("Digite seu número de telefone");
});