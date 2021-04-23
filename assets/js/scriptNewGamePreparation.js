if(localStorage.getItem('customer') === null){
	window.location = 'startingPage.html';
}
let count = 3;
let countNumber = document.querySelector('.second-group--countdown i');
let container1 = document.querySelector('.container');
let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');
let container4 = document.querySelector('.container4');
let container5 = document.querySelector('.container5');
let container6 = document.querySelector('.container6');
let container7 = document.querySelector('.container7');
let X = document.querySelector('.X');
let logar = document.querySelector('#fazerLogin');
let question = document.querySelector('#question');
let close = document.querySelector('#close');
let answerA = document.querySelector('#answerA');
let answerB = document.querySelector('#answerB');
let answerC = document.querySelector('#answerC');
let answerD = document.querySelector('#answerD');
let option = document.querySelectorAll('.option');
let resp = document.querySelectorAll('.answer');
let letra = document.querySelectorAll('.letter');
let pararJogo = document.querySelector('.stop-game');
let changeQuestionHelp = document.querySelector('#change-question');
let fifityFifity = document.querySelector('#fifty-fifty');
let choose2 = document.querySelector('#choose2');
let time = document.querySelector('.time');
let continuarJogo = document.querySelector('.keep-playing');
let lostImage = document.querySelector('.lost-img img');
let rescueData = document.querySelector('#rescue-data');
let questionNumber = document.querySelector('.top-question--number');
let stage = document.querySelector('.stage i');
let numPergunta = document.querySelector('.question-number i');
let numPerg = document.querySelector('.container2-question i');
let premioI = document.querySelector('.premio i');
let mbGanhos = document.querySelector('.second-group--words i');
let faseDiv = document.querySelector('.top-fase i');
let perdeuNaPergunta = document.querySelector('.container3-question--number i');
perdeuNaFase = document.querySelector('.container3-stage i');
let suspendGame = document.querySelector('.suspend-game');
let timer2;
let ponto = document.querySelectorAll('.ponto');
//Controles essenciais
let premio = [1,3,5,10,20,30,50,100,200,300,400,500,1024];
let numeroAjudas = 0;
if(localStorage.getItem('ajudas') !== null){
	numeroAjudas = parseInt(localStorage.getItem('ajudas'));
}
if(localStorage.getItem('premio') !== null){
	premio[localStorage.getItem('index')] = localStorage.getItem('premio');
}
let numeroDaPergunta = 1;
if(localStorage.getItem('numeroDaPergunta') !== null){
	numeroDaPergunta = localStorage.getItem('numeroDaPergunta');
}
let fase = 1;
if(localStorage.getItem('fase') !== null){
	fase = localStorage.getItem('fase');
}
let index = 0;
if(localStorage.getItem('index') !== null){
	index = localStorage.getItem('index');
}
//controles essencias fechamento

/*RESETAR OS NUMEROS INICIAIS*/
	numPergunta.innerHTML = numeroDaPergunta;
	stage.innerHTML = `FASE ${fase}`;
	mbGanhos.innerHTML = `ESTÁ FIXE! ${premio[index]} MB<br><br>TUDO PRONTO?`;
	numPerg.innerHTML = `PERGUNTA - ${numeroDaPergunta}`;
	premioI.innerHTML = `PRÉMIO - ${premio[index]} MB`;
/*FIM RESETAR OS NUMEROS INICIAIS*/

let mainCount = 30;
if(fase >= 2){
		mainCount = 15;
	}
	time.innerHTML = mainCount;
let imageArray = ['assets/images/wrong.gif','assets/images/dog.gif'];
let randomNumber = Math.round(Math.random() * (imageArray.length - 1));
let selectedImage = imageArray[randomNumber];
let timer = setInterval(()=>{
	count--;
	countNumber.innerHTML = count;
	if(count === 0){
		clearInterval(timer);
		container1.style.display = 'none';
		container2.style.display = 'block';
		timer2 = setInterval(()=>{
			mainCount--;
			time.innerHTML = mainCount;
			if(mainCount === 0){
				clearInterval(timer2);
				container2.style.display = 'none';
				lostImage.src = selectedImage;
				perdeuNaPergunta.innerHTML = numeroDaPergunta;
				perdeuNaFase.innerHTML = `FASE ${fase}`;
				container3.style.display = 'block';
				perdeu();
			}
		},1000);
	}
},1000);
let randomQuestion;
function trocarFase(){
	if(index < 12){
		index++;
	}
	if(numeroDaPergunta >= 5 && numeroDaPergunta <= 8){
		if(numeroDaPergunta === 5){
			fase++;
		}
		for(let i = 0; i < 4; i++){
			ponto[i].style.display = 'none';
		}
		for(let i = 4; i < 8; i++){
			ponto[i].style.display = 'block';
		}
	}else if(numeroDaPergunta >= 9 && numeroDaPergunta <= 12){
		if(numeroDaPergunta === 9){
			fase++;
		}
		for(let i = 4; i < 8; i++){
			ponto[i].style.display = 'none';
		}
		for(let i = 8; i < 12; i++){
			ponto[i].style.display = 'block';
		}
	}else if(numeroDaPergunta === 13){
		if(numeroDaPergunta === 13){
			fase++;
		}
		ponto[ponto.length-1].style.display = 'block';
	}
	stage.innerHTML = `FASE ${fase}`;
	numPergunta.innerHTML = numeroDaPergunta;
	numPerg.innerHTML = `PERGUNTA - ${numeroDaPergunta}`;
	if(index === 12 && premio[index] === 1024){
		premioI.innerHTML = `PRÉMIO - 1 GB`;
		mbGanhos.innerHTML = `ESTÁ FIXE! 1 GB<br><br>TUDO PRONTO?`;
	}else{
		premioI.innerHTML = `PRÉMIO - ${premio[index]} MB`;
		mbGanhos.innerHTML = `ESTÁ FIXE! ${premio[index]} MB<br><br>TUDO PRONTO?`;
	}
	faseDiv.innerHTML = `FASE ${fase}`;
}

function updateWindow(){
	if(numeroDaPergunta < 13){
		numeroDaPergunta++;
	}
	questionNumber.innerHTML = numeroDaPergunta;
	let pontoAtivo;
	pontoAtivo	= document.querySelector('.ponto.active');
			if(numeroDaPergunta < 14){
				trocarFase();
			}
			pontoAtivo.classList.add('jaGanhou');
			if(pontoAtivo.nextElementSibling !== null){
				pontoAtivo.classList.remove('active');
				pontoAtivo.nextElementSibling.classList.add('active');
			}
}

function saveData(){
	localStorage.setItem('index',index);
	localStorage.setItem('premio',premio[index]);
	localStorage.setItem('numeroDaPergunta',numeroDaPergunta);
	localStorage.setItem('fase',fase);
	localStorage.setItem('ajudas', numeroAjudas);
	if(changeQuestionHelp.getAttribute('trocaDePerguntas') == 'true'){
		localStorage.setItem('question-change-help',changeQuestionHelp.getAttribute('trocaDePerguntas'));
	}
	if(fifityFifity.getAttribute('fifty') == 'true'){
		localStorage.setItem('fifty-fifty-help', fifityFifity.getAttribute('fifty'));
	}
	if(choose2.getAttribute('choose2') == 'true'){
		localStorage.setItem('choose2-help', choose2.getAttribute('choose2'));
	}
}

function ganhouJogo(){
	localStorage.removeItem('index');
	localStorage.removeItem('premio');
	localStorage.removeItem('numeroDaPergunta');
	localStorage.removeItem('fase');
	localStorage.removeItem('question-change-help');
	localStorage.removeItem('fifty-fifty-help');
	localStorage.removeItem('choose2-help');
	localStorage.removeItem('ajudas');
	if(localStorage.getItem('saldo') !== null){
		let temporaryVar = 0;
		temporaryVar = ((premio[index]) + (parseInt(localStorage.getItem('saldo'))));
		localStorage.setItem('saldo', temporaryVar);
	}else{
		localStorage.setItem('saldo', premio[index]);
	}
}

function parouJogo(){
	localStorage.removeItem('index');
	localStorage.removeItem('premio');
	localStorage.removeItem('numeroDaPergunta');
	localStorage.removeItem('fase');
	localStorage.removeItem('question-change-help');
	localStorage.removeItem('fifty-fifty-help');
	localStorage.removeItem('choose2-help');
	localStorage.removeItem('ajudas');
	if(localStorage.getItem('saldo') !== null){
		let temporaryVar = 0;
		temporaryVar = ((premio[index - 1]) + (parseInt(localStorage.getItem('saldo'))));
		localStorage.setItem('saldo', temporaryVar);
	}else{
		localStorage.setItem('saldo', premio[index - 1]);
	}
}

function perdeu(){
	localStorage.removeItem('index');
	localStorage.removeItem('premio');
	localStorage.removeItem('numeroDaPergunta');
	localStorage.removeItem('fase');
	localStorage.removeItem('question-change-help');
	localStorage.removeItem('fifty-fifty-help');
	localStorage.removeItem('choose2-help');
	localStorage.removeItem('ajudas');
	if(localStorage.getItem('saldo') !== null){
		let temporaryVar = 0;
		if(numeroDaPergunta >= 5 && numeroDaPergunta <= 8){
			temporaryVar = ((premio[3]) + (parseInt(localStorage.getItem('saldo'))));
			localStorage.setItem('saldo', temporaryVar);
		}else if(numeroDaPergunta >= 9 && numeroDaPergunta < 12){
			temporaryVar = ((premio[7]) + (parseInt(localStorage.getItem('saldo'))));
			localStorage.setItem('saldo', temporaryVar);
		}else if(numeroDaPergunta >= 12){
			temporaryVar = ((premio[11]) + (parseInt(localStorage.getItem('saldo'))));
			localStorage.setItem('saldo', temporaryVar);
		}
	}else if(numeroDaPergunta >= 5 && numeroDaPergunta <= 8){
		localStorage.setItem('saldo', premio[3]);
	}else if(numeroDaPergunta >= 9 && numeroDaPergunta < 12){
		localStorage.setItem('saldo', premio[7]);
	}else if(numeroDaPergunta >= 12){
		localStorage.setItem('saldo', premio[11]);
	}
}

function sortearPergunta(){
	randomQuestion = Math.round(Math.random() * (pergunta.length - 1));
	question.innerHTML = pergunta[randomQuestion].pergunta.toUpperCase();
	answerA.innerHTML = pergunta[randomQuestion].respostas[0].toUpperCase();
	answerB.innerHTML = pergunta[randomQuestion].respostas[1].toUpperCase();
	answerC.innerHTML = pergunta[randomQuestion].respostas[2].toUpperCase();
	answerD.innerHTML = pergunta[randomQuestion].respostas[3].toUpperCase();
}
sortearPergunta();

function prepareGame(){
	resp.forEach((item)=>{
		if(item.classList.contains('certoAnswer')){
			item.classList.remove('certoAnswer');
		}
		if(item.classList.contains('errouAnswer')){
			item.classList.remove('errouAnswer');
		}
	});
	letra.forEach((item)=>{
		if(item.classList.contains('certoLetter')){
			item.classList.remove('certoLetter');
		}
		if(item.classList.contains('errouLetter')){
			item.classList.remove('errouLetter');
		}
	});
	option.forEach((item)=>{
		if(item.classList.contains('pointerEvents')){
			item.classList.remove('pointerEvents');
		}
	});
	count = 3;
	mainCount = 30;
	if(fase >= 2){
		mainCount = 15;
	}
	countNumber.innerHTML = count;
	container5.style.display = 'none';
	container1.style.display = 'block';
	timer = setInterval(()=>{
	count--;
	countNumber.innerHTML = count;
	if(count === 0){
		clearInterval(timer);
		container1.style.display = 'none';
		container2.style.display = 'block';
		time.innerHTML = mainCount;
		timer2 = setInterval(()=>{
			mainCount--;
			time.innerHTML = mainCount;
			if(mainCount === 0){
				clearInterval(timer2);
				container2.style.display = 'none';
				lostImage.src = selectedImage;
				perdeuNaPergunta.innerHTML = numeroDaPergunta;
				perdeuNaFase.innerHTML = ` FASE ${fase}`;
				container3.style.display = 'block';
				perdeu();
			}
		},1000);
	}
},1000);
}
let clicouNoChoose2 = false;
let contador = 0;
let vector = [];//retorna uma especie de aviso pq algumas vezes na posicao 1 o vector ser undefined

option.forEach((item)=>{
	item.addEventListener('click',(e)=>{
		option.forEach((item)=>{
			item.classList.add('pointerEvents');
		});
		e.target.closest('.option').querySelector('.answer').classList.add('pintaAnswer');
		e.target.closest('.option').querySelector('.letter').classList.add('pintaLetter');
		vector.push(e.target.closest('.option').querySelector('.answer').innerHTML);
		
		if(clicouNoChoose2 == true){
			contador++;
			option.forEach((item)=>{
				item.classList.remove('pointerEvents');
				
			});
			if(contador === 2){
				option.forEach((item)=>{
					item.classList.add('pointerEvents');
				});
			}
			setTimeout(()=>{
				if(pergunta[randomQuestion].respostaCerta.toUpperCase() == e.target.closest('.option').querySelector('.answer').innerHTML.toUpperCase()){
					e.target.closest('.option').querySelector('.answer').classList.remove('pintaAnswer');
					e.target.closest('.option').querySelector('.answer').classList.add('certoAnswer');
					e.target.closest('.option').querySelector('.letter').classList.remove('pintaLetter');
					e.target.closest('.option').querySelector('.letter').classList.add('certoLetter');
					setTimeout(()=>{
						clearInterval(timer2);
						container2.style.display = 'none';
						container4.style.display = 'block';
						if(numeroDaPergunta >= 13){
							ganhouJogo();
							container4.style.display = 'none';
							container7.style.display = 'flex';
						}else{
							updateWindow();
						}
					},1000);
				}else if(pergunta[randomQuestion].respostaCerta.toUpperCase() == vector[0].toUpperCase() 
					|| pergunta[randomQuestion].respostaCerta.toUpperCase() == vector[1].toUpperCase()){
					e.target.closest('.option').querySelector('.answer').classList.remove('pintaAnswer');
					e.target.closest('.option').querySelector('.letter').classList.remove('pintaLetter');
					clicouNoChoose2 = false;
				}else{
					e.target.closest('.option').querySelector('.answer').classList.remove('pintaAnswer');
					e.target.closest('.option').querySelector('.answer').classList.add('errouAnswer');
					e.target.closest('.option').querySelector('.letter').classList.remove('pintaLetter');
					e.target.closest('.option').querySelector('.letter').classList.add('errouLetter');
					for(let i = 0; i < resp.length; i++){
						if(pergunta[randomQuestion].respostaCerta.toUpperCase() == resp[i].innerHTML.toUpperCase()){
							resp[i].classList.add('certoAnswer');
							letra[i].classList.add('certoLetter');
						}
					}
					setTimeout(()=>{
						clearInterval(timer2);
						perdeu();
						container2.style.display = 'none';
						lostImage.src = selectedImage;
						perdeuNaPergunta.innerHTML = numeroDaPergunta;
						perdeuNaFase.innerHTML = `FASE ${fase}`;
						container3.style.display = 'block';
					},1000);
				}
		},2000);
		}else{
		setTimeout(()=>{
				if(pergunta[randomQuestion].respostaCerta.toUpperCase() == e.target.closest('.option').querySelector('.answer').innerHTML.toUpperCase()){
					e.target.closest('.option').querySelector('.answer').classList.remove('pintaAnswer');
					e.target.closest('.option').querySelector('.answer').classList.add('certoAnswer');
					e.target.closest('.option').querySelector('.letter').classList.remove('pintaLetter');
					e.target.closest('.option').querySelector('.letter').classList.add('certoLetter');
					setTimeout(()=>{
						clearInterval(timer2);
						container2.style.display = 'none';
						container4.style.display = 'block';
						if(numeroDaPergunta >= 13){
							ganhouJogo();
							container4.style.display = 'none';
							container7.style.display = 'flex';
						}else{
							updateWindow();
						}
					},1000);
				}else{
					e.target.closest('.option').querySelector('.answer').classList.remove('pintaAnswer');
					e.target.closest('.option').querySelector('.answer').classList.add('errouAnswer');
					e.target.closest('.option').querySelector('.letter').classList.remove('pintaLetter');
					e.target.closest('.option').querySelector('.letter').classList.add('errouLetter');
					for(let i = 0; i < resp.length; i++){
						if(pergunta[randomQuestion].respostaCerta.toUpperCase() == resp[i].innerHTML.toUpperCase()){
							resp[i].classList.add('certoAnswer');
							letra[i].classList.add('certoLetter');
						}
					}
					setTimeout(()=>{
						clearInterval(timer2);
						perdeu();
						container2.style.display = 'none';
						lostImage.src = selectedImage;
						perdeuNaPergunta.innerHTML = numeroDaPergunta;
						perdeuNaFase.innerHTML = `FASE ${fase}`;
						container3.style.display = 'block';
					},1000);
				}
		},2000);
	}
	});
});
close.addEventListener('click',()=>{
	window.location = 'newGame.html';
});
logar.addEventListener('click',()=>{
	let number = prompt("Digite seu número de telefone");
	let rule = /^(94)|^(92)|^(93)/g
	if(number !== null && number.match(rule)){
		localStorage.setItem('login', number);
		container6.style.display = 'none';
		X.style.display = 'none';
		prepareGame();
		sortearPergunta();
		container5.style.display = 'none';
	}else{
		while(!(number !== null && number.match(rule))){
			alert('Número inválido, digite um número UNITEL! Ex:923222222');
			number = prompt("Digite seu número de telefone");
		}
		if(number !== null && number.match(rule)){
			localStorage.setItem('login', number);
			container6.style.display = 'none';
			X.style.display = 'none';
			prepareGame();
			sortearPergunta();
			container5.style.display = 'none';
		}
	}
});
continuarJogo.addEventListener('click',()=>{
	container4.style.display = 'none';
	for(let i = 0; i < option.length; i++){
		option[i].style.display = 'flex';
	}
	if(numeroDaPergunta >= 5 && localStorage.getItem('login') === null){
		container6.style.display = 'block';
		X.style.display = 'block';
	}else{
		prepareGame();
		sortearPergunta();
		container5.style.display = 'none';
	}
});
suspendGame.addEventListener('click',()=>{
	saveData();
	window.location = 'index.html';
});
rescueData.addEventListener('click',()=>{
	window.location = 'login.html';
});
if(localStorage.getItem('question-change-help') !== null){
	changeQuestionHelp.classList.add('pointerEvents');
	changeQuestionHelp.classList.add('corCinza');
}
if(localStorage.getItem('fifty-fifty-help') !== null){
	fifityFifity.classList.add('pointerEvents');
	fifityFifity.classList.add('corCinza');
}
if(localStorage.getItem('choose2-help') !== null){
	choose2.classList.add('pointerEvents');
	choose2.classList.add('corCinza');
}
changeQuestionHelp.addEventListener('click',()=>{
	mainCount = 30;
	changeQuestionHelp.setAttribute('trocaDePerguntas', 'true');
	sortearPergunta();
	numeroAjudas++;
	changeQuestionHelp.classList.add('pointerEvents');
	changeQuestionHelp.classList.add('corCinza');
	for(let i = 0; i < option.length; i++){
		option[i].style.display = 'flex';
	}
	clicouNoChoose2 = false;
	verificaNumeroAjudas();
});;
fifityFifity.addEventListener('click',()=>{
	fifityFifity.setAttribute('fifty', 'true');
	numeroAjudas++;
	fifityFifity.classList.add('pointerEvents');
	let ajudador;
	fifityFifity.classList.add('corCinza');
	for(let i = 0; i < option.length; i++){
		option[i].style.display = 'none';
		if(option[i].querySelector('.answer').innerHTML.toUpperCase() == pergunta[randomQuestion].respostaCerta.toUpperCase()){
			option[i].style.display = 'flex';
			ajudador = i;
		}
	}
	let aleatorio = Math.round(Math.random() * (option.length - 1));
	if(aleatorio !== ajudador){
		option[aleatorio].style.display = 'flex';
	}else{
		while(aleatorio === ajudador){
		aleatorio = Math.round(Math.random() * (option.length - 1));
		if(aleatorio !== ajudador){
			option[aleatorio].style.display = 'flex';
		}
	}
	}
	verificaNumeroAjudas();
});
choose2.addEventListener('click',()=>{
	clicouNoChoose2 = true;
	choose2.setAttribute('choose2', 'true');
	numeroAjudas++;
	choose2.classList.add('pointerEvents');
	choose2.classList.add('corCinza');
	verificaNumeroAjudas();
});
pararJogo.addEventListener('click',()=>{
	
	parouJogo();
	window.location = 'index.html';
});
function verificaNumeroAjudas(){
	if(numeroAjudas == 2){
		fifityFifity.classList.add('pointerEvents');
		changeQuestionHelp.classList.add('pointerEvents');
		choose2.classList.add('pointerEvents');
		fifityFifity.classList.add('corCinza');
		changeQuestionHelp.classList.add('corCinza');
		choose2.classList.add('corCinza');
	}
}
verificaNumeroAjudas();