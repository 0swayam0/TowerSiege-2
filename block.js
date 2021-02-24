class Block{
    constructor(x,y,width,height){

        var options={
            restituition:0.4,
            friction:0
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        this.visibility=255;

        World.add(world,this.body);
    }
    display(){

        if(this.body.speed<5){
            var pos=this.body.position;
            var angle=this.body.angle;

            push();
            translate(pos.x,pos.y)
            rotate(angle);
            stroke(0);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        }

        else{
            World.remove(world,this.body);

            push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            pop();
        }

        
    }
}