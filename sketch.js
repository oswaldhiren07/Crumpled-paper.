const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var dustbin1,dustbin2,dustbin3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
		'restitution':0.3,
          'friction':0.5,
          'density':1.2


    }

	ball = Bodies.circle(200,100,20, ball_options);
	
    dustbin1 =new dustbin(850,400,10,100)

	dustbin2 =new dustbin(950,400,200,10)

	dustbin3 =new dustbin(1050,400,10,100)


    World.add(world,ball);

	console.log(ground);
	
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
	ellipse(ball.position.x, ball.position.y, 20, 20);
	keyPressed();

dustbin1.display();
dustbin2.display();
dustbin3.display();


}

    function keyPressed() {
      if (keyCode=== UP_ARROW){

    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})

	  }
        

	
 

}