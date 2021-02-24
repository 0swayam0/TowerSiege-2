class Ground{
    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.ground=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;

        World.add(world,this.ground);
    }
    display(){

        var pos=this.ground.position

        push();
        translate(pos.x,pos.y)
        noStroke();
        fill(255,0,0);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}