class Rubber{

    constructor(x,y){

var options={
    restitution:0.03,
    friction:5,
    density:1
}
this.rubber=Bodies.circle(x,y,50,options);
World.add(world,this.rubber);

    }
    show(){
        push ();
        var angle= this.rubber.angle;
        translate (this.rubber.position.x,this.rubber.position.y);
        rotate (angle);
        angleMode (RADIANS);
        rectMode(CENTER);
        fill ("white")
        ellipse(0,0,50);
        pop ();
    }
}