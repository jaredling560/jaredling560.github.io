// Great Race Start
var pixels2 = 0;
var pixels = 0;
var finishLinePosition = 1080;
var start;
var materScoot;
var mcQueenScoot;
var winner;
var finishLine;

window.addEventListener("load", function () {
    materScoot = document.getElementById('mater');
    mcQueenScoot = document.getElementById('mcQueen');
    winner = document.getElementById('winner');
    finishLine = document.getElementById('finishLine');
    finishLine.style.left = (finishLinePosition + 100) + "px";
    start = document.getElementById('goButton');
    start.addEventListener("click", startGame, false);
    materScoot.addEventListener("click", startGame, false);
    mcQueenScoot.addEventListener("click", startGame, false);
});

function startGame() {
    if (start.src.includes("go")) {
        start.src = "img/reset.png";
        myTimer2 = setInterval(mcQueenMove, 6);
        myTimer = setInterval(materMove, 6);
    }
    else {
        start.src = "img/go.png";
        winner.innerHTML = "";
        stoptimer();
        moveImage(materScoot, 0);
        moveImage(mcQueenScoot, 0);
        pixels2 = 0;
        pixels = 0;
        mcQueenScoot.width = "100";
        materScoot.width = "100";
        finishLine.style.height = 775 + "px";
    }
}

function mcQueenMove() {
    randomPixels2 = Math.ceil(Math.random() * 3);
    pixels2 = (pixels2 + randomPixels2);
    moveImage(mcQueenScoot, pixels2);
    if (pixels2 > finishLinePosition) {
        stoptimer();
        mcQueenScoot.src = "img/lightningMcQueen.png";
        winner.innerHTML = "Lightning McQueen Wins!";
        mcQueenScoot.width = "250";
        finishLine.style.height = 642 + "px";
    }
}

function materMove() {
    randomPixels = Math.ceil(Math.random() * 3);
    pixels = (pixels + randomPixels);
    moveImage(materScoot, pixels);
    if (pixels > finishLinePosition) {
        stoptimer();
        materScoot.src = "img/towMater.png";
        winner.innerHTML = "Tow Mater Wins!";
        materScoot.width = "250";
        finishLine.style.height = 628 + "px";
    }
}

function stoptimer() {
	clearInterval(myTimer);
	clearInterval(myTimer2);
}

function moveImage(image, location) {
    image.style.left = location + "px";
}