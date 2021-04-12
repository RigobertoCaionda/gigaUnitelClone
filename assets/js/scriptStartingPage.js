if(localStorage.getItem('customer') === null){
	localStorage.setItem('customer','active');
}
let newGame = document.querySelector('#new-game');
newGame.addEventListener('click',()=>{
	window.location = 'newGame.html';
});