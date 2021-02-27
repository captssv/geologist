class Iron{

    constructor(x,y,){

var options={
    restitution:0.05,
    friction:1.5,
    density:1
}
this.iron=Bodies.rectangle(x,y,60,50,options);
this.w=60;
this.h=50;
World.add(world,this.iron);

    }
    show(){
        push ();
        var angle= this.iron.angle;
        translate (this.iron.position.x,this.iron.position.y);
        rotate (angle);
        angleMode (RADIANS);
        rectMode(CENTER);
        fill ("red")
        rect(0,0,60,50);
        pop ();
    }
}