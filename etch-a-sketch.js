const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");
const moveAmmount = 10;
const {width, height} = canvas;
let hue = 0;
let x  = Math.floor(Math.random() * width);
let y  = Math.floor(Math.random() * height);

ctx.lineWidth = 20;
ctx.lineCap = "round";
ctx.lineJoin = "round";

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// Draw function
function draw({ key }) {
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch(key) {
        case "ArrowUp":
            y -= moveAmmount;
            break;
        case "ArrowDown":
            y += moveAmmount;
            break;
        case "ArrowRight":
            x += moveAmmount;
            break;
        case "ArrowLeft":
            x -= moveAmmount;
            break;

    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Handler function for the (arrow) keys
function arrowKeyHandler(e) {
    if(e.key.includes("Arrow")) {
        e.preventDefault();
        draw(e);
    }
}

// Clear canvas
function clearCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationened", function() {
        canvas.classList.remove("shake");
    }, { once: true })
}

// Listen for events
window.addEventListener("keydown", arrowKeyHandler);
shakeButton.addEventListener("click", clearCanvas);