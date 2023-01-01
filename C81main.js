var last_position_of_x,last_position_of_y;

var canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="black";
width_of_line=1;

width= screen.width;
new_width= screen.width-70;
new_height= screen.height-300;

if (width < 992) {
    document.getElementById("myCanvas").width= new_width;
    document.getElementById("myCanvas").height= new_height;
    document.body.style.overflow= "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){

    console.log("my touchstart");
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;

    last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y= e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {

    console.log("my touchmove");
    
    current_position_of_touchX= e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touchY= e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width_of_line;

        console.log("last position of x and y coordinates are : ");
        console.log("x= "+ last_position_of_x + " y= "+ last_position_of_y);

        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current position of x and y coordinates are : ");
        console.log("x= "+ current_position_of_touchX + " y= "+ current_position_of_touchY);

        ctx.lineTo(current_position_of_touchX,current_position_of_touchY);
        ctx.stroke();

    last_position_of_x= current_position_of_touchX;
    last_position_of_y= current_position_of_touchY;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}