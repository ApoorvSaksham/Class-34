
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14,
 box15, box16, box17, box18, box19, box20;
var bgImage;
var slingshot;
var backgroundImg;
var gameState = "onSling";
var points = 0;

/*var arr1 = [1,"saksham",3 , true, 5];
arr1.push("class31");
arr1.pop();
var arr3 = [[1,2], [2,3], [3,4]];
console.log(arr3[1][0]);
console.log(arr1);*///

//var platfom;
function preload(){

getTime();

}

function setup(){
 createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

box1 = new Box(800,0);
box2 = new Box(800,0);
box3 = new Box(800,0);
box4 = new Box(800,0);
box5 = new Box(800,0);
box6 = new Box(800,0);
box7 = new Box(800,0);
box8 = new Box(800,0);
//box9 = new Box(800,0);
//box10 = new Box(800,0);

//2nd column
box11 = new Box(900,0);
box12 = new Box(900,0);
box13 = new Box(900,0);
box14 = new Box(900,0);
box15 = new Box(900,0);
box16 = new Box(900,0);
box17 = new Box(900,0);
box18 = new Box(900,0);
/*box19 = new Box(900,0);
box20 = new Box(900,0);*/



ground = new Ground(600, 720, 1300, 20);

var options = {
    'restitution':0.8,
    'friction':1.0,
    'density': 0.04
}
ball = Bodies.circle(200,200,50, options);
World.add(world, ball);



}

function draw(){
   // background(bgImage);
   if(backgroundImg)
    background(backgroundImg);
    
    /*textSize(25);
    fill("white");
    text("Score : " +points, width-300,50);
    //console.log(pig1.visibility);*/

    Engine.update(engine);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
//box9.display();
//box10.display();

box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
//box19.display();
//box20.display();
ground.display();

ellipseMode(CENTER);
fill("red");
ellipse(ball.position.Box, ball.position.y, 100, 100);

}

/*function mouseDragged(){
    if(gameState !== "launched"){
        Matter.Body.setPosition(bird1.body,{x:mouseX, y: mouseY});
    }
    

}

function mouseReleased(){
    
    slingshot.fly();

    gameState = "launched";
}
function keyPressed(){
if(keyCode===32){
    gameState = "onSling";
    bird1.trajectory = [];
    Matter.Body.setPosition(bird1.body, {x: 200, y:50});
    slingshot.attach(bird1.body);

}

}*/
async function getTime()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
 // console.log(hour);

    if(hour >= 6 && hour <= 17)
    {
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);

}