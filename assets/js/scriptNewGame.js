if(localStorage.getItem('customer') === null){
	window.location = 'startingPage.html';
}
let leftArrow = document.querySelector('#left-arrow');
leftArrow.addEventListener('click',()=>{
	window.location = 'index.html';
});
let novoJogo = document.querySelector('#novoJogo');
novoJogo.addEventListener('click',()=>{
	window.location = 'newGamePreparation.html';
});