class Ground{
    constructor(x , y , width , height){
         var options ={
            isStatic : true
         };
        this.body = Bodies.rectangle(x , y , width , height , options);
        this.width = width;
        this.height = height;
        World.add(world , this.body);
    }
    display(x , y , width , height){
     var pos = this.body.position;
     fill("BROWN");
     rectMode(CENTER);
     rect(pos.x ,pos.y ,this.width , this.height);    
    }
}