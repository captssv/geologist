class Hammer{

    constructor(x,y,w,h){

var options={
    restitution:0.5,
    friction:1.0,
    density:2
}
this.hammer=Bodies.rectangle(x,y,w,h,options);
this.w=w;
this.h=h;
World.add(world,this.hammer);

    }
    show(){
        push ();
        var angle= this.hammer.angle;
        this.hammer.position.x=mouseX
        this.hammer.position.y=mouseY
        translate (this.hammer.position.x,this.hammer.position.y);
        rotate (angle);
        angleMode (RADIANS);
        rectMode(CENTER);
        fill ("yellow")
        rect(0,0,this.w,this.h);
        pop ();
    }
}