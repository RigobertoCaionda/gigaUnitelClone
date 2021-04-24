let profile = document.querySelector('#profile');
if(localStorage.getItem('customer') === null){
	window.location = 'startingPage.html';
}
if(localStorage.getItem('login') !== null){
	let firstGroup = document.querySelector('.first-menu-group');
	let entraNoGiga = document.querySelector('.entra-no-gigaUnitel');
	let logado = document.querySelector('.logado');
	firstGroup.style.display = 'none';
	entraNoGiga.style.display = 'none';
	profile.style.display = 'block';
	logado.style.display = 'block';
	if(localStorage.getItem('saldo') !== null){
		let saldo = document.querySelector('divinventada i');
		let balance = localStorage.getItem('saldo');
		saldo.innerHTML = `${balance} MB`;
	}
}
let rescueData = document.querySelector('.rescue-data');
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
let closeMenu = document.querySelectorAll('.X');
let menu = document.querySelector('.menu');
let closeMod = document.querySelector('#closeOption');
let menuIcon = document.querySelector('.fas.fa-bars');
let modal = document.querySelector('.modal');
let regulamento = document.querySelector('#regulamento');
let contentSpan = document.querySelector('.content span');
let premio = document.querySelector('#premio');
let comoJogar = document.querySelector('#comojogar');
let regras = document.querySelector('#regras');
let home = document.querySelector('#home');
let play = document.querySelector('#play');
let newGame = document.querySelector('#startNewGame');
let title = document.querySelector('.modal h1');
let login = document.querySelector('#login');
let logout = document.querySelector('#logout');
let saldoI = document.querySelector('.saldo i');
let acumuladoI = document.querySelector('.acumulado i');
let contentH4 = document.querySelector('.content h4');
let pontosI = document.querySelector('.pontos i');
let resgate = document.querySelector('#resgate');
function openMenu(){
	if(menu.classList.contains('show')){
		menu.classList.remove('show');
	}else{
		menu.classList.add('show');
		closeMenu.forEach((item)=>{
			item.style.display = 'none';
		});
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
function sairDaConta(){
	localStorage.removeItem('index');
	localStorage.removeItem('premio');
	localStorage.removeItem('numeroDaPergunta');
	localStorage.removeItem('fase');
	localStorage.removeItem('question-change-help');
	localStorage.removeItem('fifty-fifty-help');
	localStorage.removeItem('choose2-help');
	localStorage.removeItem('ajudas');
	localStorage.removeItem('saldo');
	localStorage.removeItem('login');
	localStorage.removeItem('customer');
}
function terminarSessao(){
	if(confirm("Deseja realmente terminar sessão? Você perderá seu lado se terminar sessão.")){
		sairDaConta();
		window.location = 'index.html';
	}
}
menuIcon.addEventListener('click', openMenu);
closeMenu.forEach((item)=>{
	item.addEventListener('click',close);
});
closeMod.addEventListener('click', closeModal);
regulamento.addEventListener('click',()=>{
	contentSpan.style.display = 'block';
	logout.style.display = 'none';
	contentH4.style.display = 'none';
	title.innerHTML = 'REGULAMENTO';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
});

premio.addEventListener('click',()=>{
	contentSpan.style.display = 'block';
	contentH4.style.display = 'none';
	logout.style.display = 'none';
	title.innerHTML = 'PRÉMIOS E VENCEDORES';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
});

comoJogar.addEventListener('click',()=>{
	contentSpan.style.display = 'block';
	contentH4.style.display = 'none';
	logout.style.display = 'none';
	title.innerHTML = 'COMO JOGAR';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
});

regras.addEventListener('click',()=>{
	contentSpan.style.display = 'block';
	contentH4.style.display = 'none';
	title.innerHTML = 'REGRAS DO JOGO';
	logout.style.display = 'none';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
});
profile.addEventListener('click',()=>{
	contentH4.innerHTML = `Número da conta: ${localStorage.getItem('login')}`;
	contentH4.style.display = 'block';
	contentSpan.style.display = 'none';
	logout.style.display = 'block';
	title.innerHTML = 'PERFIL';
	modal.style.display = 'block';
	modal.style.opacity = '0';
	setTimeout(()=>{
		modal.style.opacity = '1';
	},200);
	logout.addEventListener('click', terminarSessao);
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
login.addEventListener('click',()=>{
	window.location = 'login.html';
});
rescueData.addEventListener('click',()=>{
	alert('O resgate encontra-se indisponível no momento!');
});
resgate.addEventListener('click',()=>{
	alert('O resgate encontra-se indisponível no momento!');
});
if(localStorage.getItem('saldo') !== null){
	saldoI.innerHTML = `${localStorage.getItem('saldo')} MB`;
}else{
	saldoI.innerHTML = `0 MB`;
}
if(localStorage.getItem('saldo') !== null){
	acumuladoI.innerHTML = `${localStorage.getItem('saldo')} MB`;
}else{
	acumuladoI.innerHTML = `0 MB`;
}

if(localStorage.getItem('saldo') !== null){
	pontosI.innerHTML = localStorage.getItem('saldo');
}else{
	pontosI.innerHTML = 0;
}