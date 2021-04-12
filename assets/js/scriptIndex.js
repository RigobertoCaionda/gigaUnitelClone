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
let menuIcon = document.querySelector('.fas.fa-bars');
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
menuIcon.addEventListener('click', openMenu);
closeMenu.addEventListener('click',close);
