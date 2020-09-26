
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 20);

	paper = new Paper();

	trash1 = new Trash(550, 680, 200, 15);

	trash2 = new Trash(450, 630, 15, 100);

	trash3 = new Trash(650, 630, 15, 100);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);

	ground.display();
	paper.display();
	trash1.display();
	trash2.display();
	trash3.display();
	drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:750, y:-1000});
	}
};
