
  var box1,  box2;
  var ground1;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new box(200, 300, 20, 50);
    box2 = new box(300, 100, 50, 90);

    ground1 = new ground(200, 390, 400 , 20);
 /*   var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.rectangle(200,100,20,20, ball_options);
    World.add(world,ball);

    console.log(ground);  */
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   // rect(ground.position.x,ground.position.y,400,20);
  //  rect(ball.position.x, ball.position.y, 20, 20);

    box1.display();
    box2.display();

    ground1.display();
}

