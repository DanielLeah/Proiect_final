
window.addEventListener("deviceorientation", doKeyDown);
//def variables
var canvas;
var ctx;
var dx = 2;
var dy = 2;
var x = 180;
var y = 5;
var WIDTH = 440;
var HEIGHT = 440;
var img = new Image();
var collision = 0;
var elapsed;
var ok=0;
var elapsed1;

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
timer();
return setInterval(draw, 1);
}

function doKeyDown(evt){
x1=event.beta;
y1=event.gamma;
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
if((x>416)&&(y>421))
{
	ok=1;
    document.getElementById("final").innerHTML = "Felicitari! Ai iesit din labirint in "+elapsed1;
	//navigator.vibrate(200);
	window.removeEventListener("deviceorientation", doKeyDown, false);
	
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



function reseteaza(){
	window.location.reload();
	
}



function timer(){

var start = new Date().getTime(),
    elapsed = '0.0';

window.setInterval(function()
{
    var time = new Date().getTime() - start;

    elapsed = Math.floor(time / 100) / 10;
    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }

	if(ok==0)
{
 elapsed1=elapsed;
}
    document.getElementById("time").innerHTML = "Timp = "+ elapsed1;
    
    
}, 100);


}


init();