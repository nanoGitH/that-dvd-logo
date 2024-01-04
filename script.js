const myCanvas = document.querySelector("#myCanvas");

myCanvas.width = window.innerWidth+5;
myCanvas.height = window.innerHeight+5;

const c = myCanvas.getContext('2d');

c.fillStyle = 'pink';
c.strokeStyle = 'black';
c.lineWidth = '5';

let x = 150;
let y = 150;
const radius = 100
let speedX = 5;
let speedY = 5;
function draw() {
    window.requestAnimationFrame(draw);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius ,0 , 2*Math.PI);
    c.fill();
    c.stroke();

    if( x + radius > window.innerWidth || x - radius < 0) {
        speedX = -speedX;
    }
    if( y + radius > window.innerHeight || y - radius < 0) {
        speedY = -speedY;
    }

    x += speedX;
    y += speedY;
}

draw();