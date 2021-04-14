if(localStorage.getItem('customer') === null){
	window.location = 'startingPage.html';
}
let count = 3;
let countNumber = document.querySelector('.second-group--countdown i');
let container1 = document.querySelector('.container');
let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');
let close = document.querySelector('#close');
let time = document.querySelector('.time');
let lostImage = document.querySelector('.lost-img img');
let rescueData = document.querySelector('#rescue-data');
let timer2;
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
close.addEventListener('click',()=>{
	window.location = 'newGame.html';
});
rescueData.addEventListener('click',()=>{
	window.location = 'login.html';
});