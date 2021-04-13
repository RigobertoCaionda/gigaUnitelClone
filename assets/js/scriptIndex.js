if(localStorage.getItem('customer') === null){
	window.location = 'startingPage.html';
}
let links = document.querySelectorAll('nav ul li a');
links.forEach((item)=>{
	item.addEventListener('click',(e)=>{
		e.preventDefault();
	});
});
let goodLuckImg = document.querySelector('.good-luck img');
let imageArray = ['assets/images/good_luck.gif','assets/images/good_luck_negro.gif'];
let randomPosition = Math.round(Math.random() * (imageArray.length -1));
goodLuckImg.src = imageArray[randomPosition];
let closeMenu = document.querySelector('.X');
let menu = document.querySelector('.menu');
let closeMod = document.querySelector('#closeOption');
let menuIcon = document.querySelector('.fas.fa-bars');
let modal = document.querySelector('.modal');
let regulamento = document.querySelector('#regulamento');
let premio = document.querySelector('#premio');
let comoJogar = document.querySelector('#comojogar');
let regras = document.querySelector('#regras');
let home = document.querySelector('#home');
let play = document.querySelector('#play');
let newGame = document.querySelector('#startNewGame');
let title = document.querySelector('.modal h1');
function openMenu(){
	if(menu.classList.contains('show')){
		menu.classList.remove('show');
	}else{
		menu.classList.add('show');
	}
}
function close(){
		menu.classList.remove('show');
}
function closeModal(){
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.display = 'none';
	},500);
}
menuIcon.addEventListener('click', openMenu);
closeMenu.addEventListener('click',close);
closeMod.addEventListener('click', closeModal);
regulamento.addEventListener('click',()=>{
	title.innerHTML = 'REGULAMENTO';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
});

premio.addEventListener('click',()=>{
	title.innerHTML = 'PRÉMIOS E VENCEDORES';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
});

comoJogar.addEventListener('click',()=>{
	title.innerHTML = 'COMO JOGAR';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
});

regras.addEventListener('click',()=>{
	title.innerHTML = 'REGRAS DO JOGO';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
});
home.addEventListener('click',()=>{
	window.location = 'index.html';
});
play.addEventListener('click',()=>{
	window.location = 'newGame.html';
});
newGame.addEventListener('click',()=>{
	window.location = 'newGame.html';
});