window.addEventListener("scroll", function () {
	var navScroll = document.getElementById('nav');
	navScroll.classList.toggle("fixnav", window.scrollY > 200);
})

function navBack(){
	var nav = document.getElementById('nav');
	nav.classList.toggle("change");
}