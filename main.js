var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

var screenw = screen.width;


var newcanvasw = screen.width-70;
var newcanvash = screen.height-300;
 
if(screenw < 992){

    document.getElementById("myCanvas").width = newcanvasw
    document.getElementById("myCanvas").height = newcanvash
    document.body.style.overflow="hidden"
}

canvas.addEventListener("touchstart",stouch)
canvas.addEventListener("touchmove",mtouch)

function stouch(e){

    last_position_of_x = e.touches[0].clientX-canvas.offsetLeft
    last_position_of_y = e.touches[0].clientY-canvas.offsetTop

}

function mtouch(e){

    current_position_of_x = e.touches[0].clientX-canvas.offsetLeft
    current_position_of_y = e.touches[0].clientY-canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width_of_line

    ctx.moveTo(last_position_of_x,last_position_of_y)
    ctx.lineTo(current_position_of_x,current_position_of_y)
    ctx.stroke()



}
canvy.addEventListener("mousedown",downmouse)
canvy.addEventListener("mouseup",upmouse)
canvy.addEventListener("mouseleave",leavemouse)
canvas.addEventListener("mousemove",movemouse)

function downmouse(e){
    mycolour=document.getElementById("colourgrab").value
    widthofline=document.getElementById("widthgrab").value

    mouseevent="mde"
}

function upmouse(e){
    mouseevent="mue"
}

function leavemouse(e){
    mousevent="mle"
}

function movemouse(e){
    var currentpositionofx=e.clientX-canvy.offsetLeft
    var currentpositionofy=e.clientY-canvy.offsetTop

    if(mouseevent=="mde"){
        ctx.beginPath()
        ctx.strokeStyle=mycolour
        ctx.lineWidth=widthofline

        ctx.moveTo(lastpositionofx,lastpositionofy)
        ctx.lineTo(currentpositionofx,currentpositionofy)
        ctx.stroke()

    }
    
    lastpositionofx=currentpositionofx
    lastpositionofy=currentpositionofy
}

