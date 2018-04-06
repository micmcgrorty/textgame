var isOn = true;
setInterval(function(){
	if (isOn){
		darkButtons();
    }
	else {
		lightButtons();
    }
	isOn = !isOn;
},1000)

var btn = document.querySelectorAll(".btn");

function darkButtons(){
	btn[0].classList.remove("btn-light");
	btn[1].classList.remove("btn-dark");
	btn[2].classList.remove("btn-light");

	btn[0].classList.add("btn-dark");
	btn[1].classList.add("btn-light");
	btn[2].classList.add("btn-dark");
}

function lightButtons(){
	btn[0].classList.remove("btn-dark");
	btn[1].classList.remove("btn-light");
	btn[2].classList.remove("btn-dark");

	btn[0].classList.add("btn-light");
	btn[1].classList.add("btn-dark");
	btn[2].classList.add("btn-light");
}

var firstButton = document.querySelector("#firstButton");
firstButton.addEventListener("click", wentNorth);

var content = document.querySelector(".caption");
var image = document.querySelector("#image");

var btns = document.querySelectorAll(".btn");

function wentNorth(){
	content.textContent = "You went north. dragon bla bla bla";
	firstButton.textContent = "beg";
	secondButton.textContent = "threaten";
	thirdButton.textContent = "run";

	image.setAttribute("src", "https://vignette.wikia.nocookie.net/monster/images/6/6e/DragonRed.jpg");

	firstButton.addEventListener("click", function(){
	content.textContent = "beg dragon";

	image.setAttribute("src", "https://vignette.wikia.nocookie.net/monster/images/6/6e/DragonRed.jpg");
	
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU WIN";
		btns[i].disabled = true;
	}
});
	secondButton.addEventListener("click", function(){
	content.textContent = "threaten dragon";

	image.setAttribute("src", "https://vignette.wikia.nocookie.net/monster/images/6/6e/DragonRed.jpg");
	
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU DIED";
		btns[i].disabled = true;
	}
});
	thirdButton.addEventListener("click", function(){
	content.textContent = "run away";

	image.setAttribute("src", "https://vignette.wikia.nocookie.net/monster/images/6/6e/DragonRed.jpg");
	
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU WIN";
		btns[i].disabled = true;
	}
});
}

var secondButton = document.querySelector("#secondButton");
secondButton.addEventListener("click", function (){
	content.textContent = "You went south. Village bla bla bla";
	firstButton.textContent = "house";
	secondButton.textContent = "tavern";
	thirdButton.textContent = "store";

	image.setAttribute("src", "http://www.creativeuncut.com/gallery-08/art/f2-village.jpg");

	firstButton.addEventListener("click", function(){
	image.setAttribute("src", "http://www.creativeuncut.com/gallery-08/art/f2-village.jpg");
	content.textContent = "You decide to enter a house.";
	firstButton.textContent = "1st House";
	secondButton.textContent = "2nd House";
	thirdButton.textContent = "3rd House";

	firstButton.addEventListener("click", function(){
	content.textContent = "house one";
	image.setAttribute("src", "http://www.creativeuncut.com/gallery-08/art/f2-village.jpg");
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU WIN";
		btns[i].disabled = true;
	}
});
	secondButton.addEventListener("click", function(){
	content.textContent = "house two";
	image.setAttribute("src", "http://www.creativeuncut.com/gallery-08/art/f2-village.jpg");
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU DIED";
		btns[i].disabled = true;
	}
});
	thirdButton.addEventListener("click", function(){
	content.textContent = "house three";
	image.setAttribute("src", "http://www.creativeuncut.com/gallery-08/art/f2-village.jpg");
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU WIN";
		btns[i].disabled = true;
	}
});
});
	secondButton.addEventListener("click", function(){
	content.textContent = "tavern for pint of ale";
	image.setAttribute("src", "http://www.creativeuncut.com/gallery-08/art/f2-village.jpg");
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU WIN";
		btns[i].disabled = true;
	}
});
	thirdButton.addEventListener("click", function(){
	content.textContent = "store to get job";
	image.setAttribute("src", "http://www.creativeuncut.com/gallery-08/art/f2-village.jpg");
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU WIN";
		btns[i].disabled = true;
	}
});
})

var thirdButton = document.querySelector("#thirdButton");
thirdButton.addEventListener("click", function(){
	content.textContent = "You went east. Bear kills you bla bla bla";
	
	for(var i = 0; i < btns.length; i++){
		btns[i].textContent = "YOU DIED";
		btns[i].disabled = true;
	}

	image.setAttribute("src", "https://vignette.wikia.nocookie.net/farcry/images/c/cd/022516-232223745-sm.jpg");
});