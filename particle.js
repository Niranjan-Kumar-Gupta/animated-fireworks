

let gravity = 2;
let dt = 0.1;
class Particle{
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y =  Math.random()*100 + canvas.height;
        this.speedX = 0;
        this.speedY = -(Math.random()*20 + 40);
        this.accX = 0;
        this.accY = gravity;
        this.size = Math.random()*4 + 2;
        this.color = 'rgb(206,188,34)';
        
    }
    draw(){
         ctx.fillStyle = this.color;       
         ctx.strokeStyle = 'blue';
         ctx.lineWidth = 1;
         ctx.beginPath();
         ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
         ctx.closePath();
         ctx.stroke();
         ctx.fill(); 
    } 
    update(){
       
        this.speedY += this.accY*dt;    
        this.x += this.speedX*dt;  
        this.y += this.speedY*dt;
        if (this.speedY > 0) {
            this.speedY = 0;
        } 
        
    }
}