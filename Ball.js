class Ball{
    constructor(x , y ){
         var options ={
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
         };
        this.body = Bodies.circle(x , y , 10 , options);
        this.radius = 25;
        World.add(world , this.body);
    }
    display(){
     //var body = this.body
     var pos = this.body.position;
     //pos.x = mouseX;
     //pos.y = mouseY
     var angle = this.body.angle;
     push();
     translate(pos.x , pos.y);
     rotate(angle);
     strokeWeight(4);
    // stroke("springgreen");
     fill("pink");
     ellipseMode(RADIUS);
     ellipse(0 , 0 ,this.radius); 
     pop(); 
     
    }
}

  
