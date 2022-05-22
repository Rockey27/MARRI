img="";

function preload(){
    img=loadImage('roses-flowers-pot-petals-wallpaper-preview.jpg');
}

function setup() {
canvas=createCanvas(640,420);
canvas.center();
}

function draw() {
image(img,0,0,640,420);
fill("#FF0000");
text("rose flower pot",45,75);
noFill();
stroke("#FF0000");
strokeWeight(2);
rect(30,60,450,350);
}


