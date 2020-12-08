class Paper{

    constructor(x, y, radius){

        var options ={
  
           isStatic : false,
           restitution : 0.3,
           friction : 0.5,
           density : 1.2

        }

        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("paper.png");
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position

        push();
        translate(pos.x, pos.y);

        imageMode(RADIUS);

        fill("white");
        stroke("green")
        
        image(this.image,0, 0, this.radius, this.radius);

        pop();

    }

}

