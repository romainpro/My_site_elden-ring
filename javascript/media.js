const canvas =document.querySelector("canvas");
const ctx =canvas.getContext('2d');

let posX = 100, 
    posY = 0;

canvas.addEventListener("mousemove", e =>{
    posX = e.offsetX;
    posY =e.offsetY;
    console.log(posX,posY);
})


function anim(){

    ctx.clearRect(0,0,canvas.width,canvas.height);


    ctx.save();
    ctx.beginPath();
    ctx.rect(posX -100 ,0,350,750);
    ctx.clip();


    ctx.drawImage(document.querySelector("video"),0,0,canvas.width,canvas.height);
    ctx.restore();

    requestAnimationFrame(anim);
}

anim()