var mouseEvent="empty";
var last_position_X,last_position_Y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
    
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionX=e.clientX-canvas.offsetLeft;
    currentpositionY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=4;
        ctx.moveTo(last_position_X,last_position_Y);
        ctx.lineTo(currentpositionX,currentpositionY);
        ctx.stroke();

    }
    last_position_X=currentpositionX;

    last_position_Y=currentpositionY;
    
}
