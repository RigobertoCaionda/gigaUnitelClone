if(localStorage.getItem('customer') === null){
	window.location = 'startingPage.html';
}
let leftArrow = document.querySelector('#left-arrow');
let container6 = document.querySelector('.container6');
let x = document.querySelector('.X');
let gameImage = document.querySelector('.game-image');
let fazerLogin = document.querySelector('#fazerLogin');
leftArrow.addEventListener('click',()=>{
	window.location = 'index.html';
});
let novoJogo = document.querySelector('#novoJogo');
novoJogo.addEventListener('click',()=>{
	if(localStorage.getItem('numeroDaPergunta') !== null){
		if(localStorage.getItem('numeroDaPergunta') >= 5 && localStorage.getItem('login') === null){
			gameImage.style.display = 'none';
			container6.style.display = 'block';
			x.style.display = 'block';
		}else{
			window.location = 'newGamePreparation.html';
		}
	}else{
		window.location = 'newGamePreparation.html';
	}
});
x.addEventListener('click',()=>{
	gameImage.style.display = 'block';
	container6.style.display = 'none';
	x.style.display = 'none';
});
fazerLogin.addEventListener('click',()=>{
	let number = prompt("Digite seu número de telefone");
	let rule = /^(94)|^(92)|^(93)/g
	if(number !== null && number.match(rule) && number.length == 9){
		localStorage.setItem('login', number);
		container6.style.display = 'none';
		x.style.display = 'none';
		window.location = 'newGamePreparation.html';
	}else{
		while(!(number !== null && number.match(rule) && number.length == 9)){
			alert('Número inválido, digite um número UNITEL! Ex:923222222');
			number = prompt("Digite seu número de telefone");
		}
		if(number !== null && number.match(rule) && number.length == 9){
			localStorage.setItem('login', number);
			container6.style.display = 'none';
			x.style.display = 'none';
			window.location = 'newGamePreparation.html';
		}
	}
});