const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var bgi;
var snowe = [];

function preload()
{
    bgi = loadImage("snow1.jpg");
}

function setup()
{
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
   

}

function mouseDragged()
{
if(mouseY < 110 && mouseY > 1)
    {
    snowe.push(new Snow(mouseX,mouseY,40,40));
    }
}

function draw()
{
    background(bgi);
    Engine.update(engine);

    strokeWeight(3);
    stroke('black');
    textSize(30);
    text('Drag the mouse above the line and see what happens!',500,80);
    strokeWeight(3);
    stroke('black');
    line(1,100,2000,100);

    for(var i = 0; i < snowe.length; i++)
    {
        snowe[i].display();
    }


}