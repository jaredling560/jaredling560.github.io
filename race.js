// Great Race Start
var pixels2 = 0;
var pixels = 0;


var materScoot=document.getElementById('mater');
var mcQueenScot=document.getElementById('mcQueen');
var start = document.getElementById('goButton');
start.addEventListener("click", startGame, false);

function startGame() {
	start.src = "img/Go.jpg";
	start.height = "100";
}

function materMove() {
	materScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
	randomPixels2 = (pixels2 + randomPixels2);
	if (pixels2 > 850) {
		stoptimer();
		materScoot.src = "img/Tow Mater.jpg";
		materScoot.width = "250";
	}
}


function mcQueenMove() {
	mcQueenScoot.setAttribute ("style", "margin-left:" + pixels + "px;");
	randomPixels2 = (pixels2 + randomPixels2);
	if (pixels2 > 850) {
		stoptimer();
		mcQueenScoot.src = "img/Lightning McQueen.jpg";
		mcQueenScoot.width = "250";
	}
}

myTimer2 = setInterval(mcQueenMove, 1000)
myTimer = setInterval(materMove, 1000)

function stoptimer() {
	clearInterval(myTimer);
	clearInterval(myTimer2);
}
}
