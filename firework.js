
class Firework{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.speedX = Math.random()*5 - 2.5;
        this.speedY = Math.random()*5 - 2.5;       
        this.size = Math.random()*3 + 1;;
        this.dth = Math.random();
        this.dtx = Math.cos(this.dth);
        this.dty = Math.sin(this.dth);
        this.color = 'hsl('+hue+',100%,50%)';
    }
    draw(){
         ctx.fillStyle = this.color;             
         ctx.beginPath();
         ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
         ctx.closePath();       
         ctx.fill(); 
    }
    update(){
       
        this.x += this.speedX*this.dtx;  
        this.y += this.speedY*this.dty;
        if (this.size > 0.3) {
            this.size -= 0.07;
        }  
           
    }
}