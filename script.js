// Elements to variables
var startButton = document.getElementById("startButton");
var startScreenTitle = document.getElementById("startScreenTitle");
var startScreen = document.getElementById("startScreen");
var store = document.getElementById("store");
var menu = document.getElementById("menu");
var help = document.getElementById("help");
var showNotifs = document.getElementById("showNotifs");
var BCmoneyUp = 0;
var moneyDisplay = document.getElementById("moneyDisplay");
var maingameBody = document.getElementById("maingameBody");
var startBody = document.getElementById("startBody");

// Function to hide the start screen
function hideStartScreen() {
    let opacity = 1;
    let interval = setInterval(() => {
        opacity -= 0.05;
        startScreen.style.opacity = opacity;
        if (opacity <= 0) {
            startButton.style.animationPlayState = "paused";
            startScreenTitle.style.animationPlayState = "paused";
            startScreen.style.display = "none";
            clearInterval(interval);
            window.location.assign("maingame.html");
        }
    }, 100);

}

// Functions for making buttons do things
function SBMouseOver() {
    startButton.style.opacity = "0.8";
    startButton.style.boxShadow = "15px 15px 5px #474747";
}
function SBMouseOff() {
    startButton.style.opacity = "1";
    startButton.style.boxShadow = "10px 10px 5px #474747";
}
function SBMouseDown() {
    startButton.style.boxShadow = "0px 0px 0px white";
}
function SBMouseUp() {
    startButton.style.boxShadow = "10px 10px 5px grey";
    hideStartScreen();
}

// What happens when Navigation buttons are clicked
function menuClicked() {
    window.location.assign("menu.html")
}
function storeClicked() {

}
function helpClicked() {

}
function notifsClicked() {

}

// What happens when a balloon is clicked
function balloonClicked() {
    BCmoneyUp += 1;
    moneyDisplay.innerHTML = "BC Money: " + BCmoneyUp.toLocaleString();
    hideBalloon();
}
function hideBalloon() {
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
    document.getElementById("b5").style.display = "none";
    document.getElementById("b6").style.display = "none";
    randomBalloon(1, 6);
}

// Picks which balloon shows and what to do with it
function randomBalloon(min, max) {

    var picked = Math.floor(Math.random() * (max - min)) + min;
    var result = document.getElementById("b" + picked);

    var top = Math.floor(Math.random() * window.innerHeight);
    var left = Math.floor(Math.random() * window.innerWidth);
    console.log(top);
    console.log(left);
    result.style.top = top + "px";
    result.style.left = left + "px";
    result.style.display = "inline";
}

// This is responsible for doing stuff once the page(s) loads
function onloadFunctions() {
    randomBalloon(1, 6);
    resize();
}

// Resizes the games viewport
function resize() {
    maingameBody.style.height = window.innerHeight;
    maingameBody.style.width = window.innerWidth;
}


// Other stuff
function quickNav() {
    window.location.assign("maingame.html");
}

const mousePosText = document.getElementById('mouse-pos');
let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
}
);