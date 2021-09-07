class Snow{
    constructor(x,y,r){
        var options ={
            restitution: 0.9,
            friction : 0.9  
        }
       this.r = r
        this.body = Bodies.circle(x,y,this.r,options);
        this.img = loadImage("snow4.webp");
   
    World.add (world,this.body);
    }
        
    display(){
        var pos = this.body.position;
        image (this.img,pos.x,pos.y)
        push();
        translate (pos.x,pos.y)
        imageMode(CENTER);
       ellipseMode(RADIUS)
       ellipse (0,0,this.r,this.r)
    pop();
    }
    }

