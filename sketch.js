const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon, slingShot;
var score = 0;



function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,height,800,20);
    block1 = new Block(380,375,30,30)
    block2 = new Block(410,375,30,30)
    block3 = new Block(440,375,30,30)
    block4 = new Block(470,375,30,30)
    block5 = new Block(500,375,30,30)
    block6 = new Block(530,375,30,30)
    block7 = new Block(560,375,30,30)
    block8 = new Block(395,345,30,30)
    block9 = new Block(425,345,30,30)
    block10 = new Block(455,345,30,30)
    block11 = new Block(485,345,30,30)
    block12 = new Block(515,345,30,30)
    block13 = new Block(545,345,30,30)
    block14 = new Block(410,315,30,30)
    block15 = new Block(440,315,30,30)
    block16 = new Block(470,315,30,30)
    block17 = new Block(500,315,30,30)
    block18 = new Block(530,315,30,30)
    block19 = new Block(425,285,30,30)
    block20 = new Block(455,285,30,30)
    block21 = new Block(485,285,30,30)
    block22 = new Block(515,285,30,30)
    block23 = new Block(440,255,30,30)
    block24 = new Block(470,255,30,30)
    block25 = new Block(500,255,30,30)
    block26 = new Block(455,225,30,30)
    block27 = new Block(485,225,30,30)
    polygon = new Polygon(100,150,10);
    slingshot = new SlingShot(polygon.body,{x:150, y:180});
}

function draw(){
    Engine.update(engine);
    strokeWeight(1); 
    text("Score"+ score, 800, 50);
    ground.display();
    polygon.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    slingshot.display(); 
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();  
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}
async function getTime(){
    var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responcejson = await responce.json();
    var datetime = responcejson.datetime;
    var hour = datetime.slice(11,13)
    if (hour >= 06 && hour <= 19){
        bg = "white";
    }else {
        bg = "black";
    }
    background(bg);
    console.log(responcejson)
}