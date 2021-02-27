class Sand{

    constructor(x,y){

var options={
    restitution:1.3,
    friction:5,
    density:1
}
this.sand=Bodies.circle(x,y,10,options);
World.add(world,this.sand);

    }
    show(){
        push ();
        var angle= this.sand.angle;
        translate (this.sand.position.x,this.sand.position.y);
        rotate (angle);
        angleMode (RADIANS);
        rectMode(CENTER);
        fill ("white")
        ellipse(0,0,10);
        pop ();
    }
}