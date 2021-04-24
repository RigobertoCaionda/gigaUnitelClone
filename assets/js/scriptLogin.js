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
	let rule = /^(94)|^(92)|^(93)/g
	if(number !== null && number.match(rule) && number.length == 9){
		localStorage.setItem('login', number);
		window.location = 'index.html';
	}else{
		alert('Número inválido, digite um número UNITEL! Ex:923222222');
	}
});