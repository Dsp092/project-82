var mouseEvent="empty";
var lastpositionx,lastpositiony;
canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="black";
width_of_line=9;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("colorbox").value;
    width_of_line=document.getElementById("widthnumber").value;
    raduis=document.getElementById("raduis").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    currentpositionofmousex=e.clientX-canvas.offsetLeft;
    currentpositionofmousey=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(currentpositionofmousex,currentpositionofmousey,raduis,0,2*Math.PI);
ctx.stroke();
    }
lastpositionx=currentpositionofmousex;
lastpositiony=currentpositionofmousey;
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}