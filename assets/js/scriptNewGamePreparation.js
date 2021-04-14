if(localStorage.getItem('customer') === null){
	window.location = 'startingPage.html';
}
let count = 3;
let countNumber = document.querySelector('.second-group--countdown i');
let container1 = document.querySelector('.container');
let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');
let question = document.querySelector('#question');
let close = document.querySelector('#close');
let answerA = document.querySelector('#answerA');
let answerB = document.querySelector('#answerB');
let answerC = document.querySelector('#answerC');
let answerD = document.querySelector('#answerD');
let option = document.querySelectorAll('.option');
let resp = document.querySelectorAll('.answer');
let letra = document.querySelectorAll('.letter');
let time = document.querySelector('.time');
let lostImage = document.querySelector('.lost-img img');
let rescueData = document.querySelector('#rescue-data');
let timer2;
//Controles essenciais
let megasGanhos = 1;
let premio = [1,3,5,10,20,30,50,100,200,300,400,500,1000];//Os mb que ele pode ganhar
let numeroDaPergunta = 1;
let fase = 1;
//controles essencias fechamento
let mainCount = 30;
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
				let imageArray = ['assets/images/wrong.gif','assets/images/dog.gif'];
				let randomNumber = Math.round(Math.random() * (imageArray.length - 1));
				let selectedImage = imageArray[randomNumber];
				lostImage.src = selectedImage;
				container3.style.display = 'block';
			}
		},1000);
	}
},1000);
let randomQuestion = Math.round(Math.random() * (pergunta.length - 1));
question.innerHTML = pergunta[randomQuestion].pergunta.toUpperCase();
answerA.innerHTML = pergunta[randomQuestion].respostas[0].toUpperCase();
answerB.innerHTML = pergunta[randomQuestion].respostas[1].toUpperCase();
answerC.innerHTML = pergunta[randomQuestion].respostas[2].toUpperCase();
answerD.innerHTML = pergunta[randomQuestion].respostas[3].toUpperCase();
function validateAnswer(){

}
option.forEach((item)=>{
	item.addEventListener('click',(e)=>{
		e.target.closest('.option').querySelector('.answer').classList.add('pintaAnswer');
		e.target.closest('.option').querySelector('.letter').classList.add('pintaLetter');
		setTimeout(()=>{
				if(pergunta[randomQuestion].respostaCerta.toUpperCase() == e.target.closest('.option').querySelector('.answer').innerHTML.toUpperCase()){
					e.target.closest('.option').querySelector('.answer').classList.remove('pintaAnswer');
					e.target.closest('.option').querySelector('.answer').classList.add('certoAnswer');
					e.target.closest('.option').querySelector('.letter').classList.remove('pintaLetter');
					e.target.closest('.option').querySelector('.letter').classList.add('certoLetter');
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
				}
		},2000);
		//Verificar se existe o idList, tem como pegar o id ou a class de um elemento?
	});
});
close.addEventListener('click',()=>{
	window.location = 'newGame.html';
});
rescueData.addEventListener('click',()=>{
	window.location = 'login.html';
});