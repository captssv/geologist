class Stone{

    constructor(x,y){

var options={
    restitution:0.05,
    friction:15,
    density:3
}
this.stone=Bodies.rectangle(x,y,40,40,options);
this.w=40;
this.h=40;
World.add(world,this.stone);

    }
    show(){
        push ();
        var angle= this.stone.angle;
        translate (this.stone.position.x,this.stone.position.y);
        rotate (angle);
        angleMode (RADIANS);
        rectMode(CENTER);
        fill ("orange")
        rect(0,0,40,40);
        pop ();
    }
}