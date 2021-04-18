const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

window.addEventListener('resize',function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 

});

let particle = [];
let firework = [];
let hue = 0;

function init() {
    for (let i = 0; i < 15; i++) {
        particle.push(new Particle());
    }
}
init();

function handleFirework() {
    for (let i = 0; i < firework.length; i++) {
        firework[i].update();
        firework[i].draw();

        if (firework[i].size<=0.3) {
            firework.splice(i,1);
            
            i--;
        }        
    }
}

function animate() {
    requestAnimationFrame(animate);
   
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    handleFirework();
    for (let i = 0; i < particle.length; i++) {
       particle[i].draw();
       particle[i].update();
     
       if (particle[i].speedY === 0) {
            
            let yy =  particle[i].y
            let xx = particle[i].x;
           
            for (let i = 0; i < 300; i++) {            
                firework.push(new Firework(xx,yy));                                         
            }
            
             particle[i].y = canvas.height
             particle[i].speedY = -(Math.random()*20 +40); 
                                          
        } 
           
    }
    hue+=25;   
}
animate();
console.log(particle)
