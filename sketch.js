const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint

var world;

function preload(){
    polygonImg=loadImage("polygon.png");
}

function setup(){

    createCanvas(800,800);

    engine=Engine.create();
    world=engine.world;

    Engine.run(engine);

    ground=new Ground(400,750,800,30);
    stand1=new Ground(390,520,250,10);
    stand2=new Ground(700,240,200,10);

    block1 = new Block(300,495,30,40);
    block2 = new Block(330,495,30,40);
    block3 = new Block(360,495,30,40);
    block4 = new Block(390,495,30,40);
    block5 = new Block(420,495,30,40);
    block6 = new Block(450,495,30,40);
    block7 = new Block(480,495,30,40);

    block8 = new Block(330,455,30,40);
    block9 = new Block(360,455,30,40);
    block10 = new Block(390,455,30,40);
    block11 = new Block(420,455,30,40);
    block12 = new Block(450,455,30,40);

    block13 = new Block(360,415,30,40);
    block14 = new Block(390,415,30,40);
    block15 = new Block(420,415,30,40);

    block16 = new Block(390,375,30,40);

    blocks1 = new Block(640,215,30,40);
    blocks2 = new Block(670,215,30,40);
    blocks3 = new Block(700,215,30,40);
    blocks4 = new Block(730,215,30,40);
    blocks5 = new Block(760,215,30,40);

    blocks6 = new Block(670,175,30,40);
    blocks7 = new Block(700,175,30,40);
    blocks8 = new Block(730,175,30,40);

    blocks9 = new Block(700,135,30,40);

    ball=Bodies.circle(50,150,25);
    World.add(world,ball);

    slingshot=new Slingshot(this.ball,{x:100,y:200})
}

function draw(){
    background(60, 46, 46);

    textSize(20);
    fill(208, 200, 171);
    text("Drag hexagonal stone to launch it towards the blocks",100,30);

    ground.display();
    stand1.display();
    stand2.display();

    strokeWeight(4);
    stroke(15);

    fill(103, 209, 234);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill(255, 190, 196);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill(103, 209, 234);
    block13.display();
    block14.display();
    block15.display();

    fill(128, 125, 120);
    block16.display();

    fill(103, 209, 234);
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();

    fill(103, 209, 234);
    blocks6.display();
    blocks7.display();
    blocks8.display();

    fill(255, 190, 196);
    blocks9.display();

    fill("gold");
    imageMode(CENTER);
    image(polygonImg,ball.position.x,ball.position.y,50,50);

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(this.ball);
    }
}