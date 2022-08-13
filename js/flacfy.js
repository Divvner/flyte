const preloader = document.querySelector(".preloader");
const footer 	= document.querySelector(".footer__block__maker");
const video  	= document.querySelector(".video");
const sound     = document.querySelector(".soundbutton");

footer.style.display = "none";
video.style.display = "none";
sound.style.display = "none";

setTimeout(() => {
	footer.style.display = "block";
	sound.style.display = "block";
	video.style.display = "block";
	preloader.style.opacity = "0";
	preloader.style.visibility = "hidden";
}, 3000);

let soundButton = document.querySelector('.soundbutton'),
		audio = document.querySelector('.audio');

soundButton.addEventListener('click', e => {
	soundButton.classList.toggle('paused');
	audio.paused ? audio.play() : audio.pause();
})
