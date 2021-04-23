if(localStorage.getItem('customer') === null){
	localStorage.setItem('customer','active');
}
let newGame = document.querySelector('#new-game');
let continueGame = document.querySelector('#continue-game');
let rescueData = document.querySelector('#rescue-data');
let howTowin = document.querySelector('#howTowin');
newGame.addEventListener('click',()=>{
	window.location = 'newGame.html';
});
function alerta(){
	alert('Clique em começar um novo jogo!');
}
continueGame.addEventListener('click', alerta);
rescueData.addEventListener('click', alerta);
howTowin.addEventListener('click', alerta);
