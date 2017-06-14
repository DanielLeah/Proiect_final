
window.addEventListener("deviceorientation", doKeyDown);

var canvas;
var ctx;
var dx = 2;
var dy = 2;
var x = 180;
var y = 5;
var WIDTH = 482;
var HEIGHT = 482;
var img = new Image();
var collision = 0;

function rect(x,y,w,h) {
ctx.beginPath();
ctx.rect(x,y,w,h);
ctx.closePath();
ctx.fill();
}

function clear() {
ctx.clearRect(0, 0, WIDTH, HEIGHT);
ctx.drawImage(img, 0, 0);
}

function init() {
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
img.src = "maze.gif";
return setInterval(draw, 0);
}

function doKeyDown(evt){
x1=event.beta;
y1=event.gamma;
document.getElementById("y").innerHTML = "Beta = "+x1;
document.getElementById("z").innerHTML = "Gama = "+y1;
if(x1>90)
x1=90;
if(x1<-90)
x1=90;


if(x1<-5){ 
if (y - dy > 0){
y -= dy;
clear();
checkcollision();
if (collision == 1){
y += dy;
collision = 0;
}
}
}

if(x1>5){  
if (y + dy < HEIGHT ){
y += dy;
clear();
checkcollision();
if (collision == 1){
y -= dy;
collision = 0;
}
}
}

if(y1<-5){  
if (x - dx > 0){
x -= dx;
clear();
checkcollision();
if (collision == 1){
x += dx;
collision = 0;
}
}
}

if(y1>5){ 
if ((x + dx < WIDTH)){
x += dx;
clear();
checkcollision();
if (collision == 1){
x -= dx;
collision = 0;
}
}
}
}

function checkcollision() {
var imgd = ctx.getImageData(x, y, 15, 15);
var pix = imgd.data;
for (var i = 0; n = pix.length, i < n; i += 4) {
if (pix[i] == 0) {
collision = 1;
}
}
}

function draw() {
clear();
ctx.fillStyle = "purple";
rect(x, y, 15,15);
}

init();