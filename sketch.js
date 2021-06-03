const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles=null;
var plinkos = [];
var divisions = [];

var score=0;
var count=0;

var gameState="play";

var divisionHeight=300;
var score;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    score=0;

    
}
 


function draw() {
  background("black");
  textSize(20);
  fill("red");
  text("SCORE : "+score, 650,30);
  fill("orange");
  text("500",20,550);
  fill("orange");
  text("500",100,550);
  fill("orange");
  text("500",180,550);
  fill("orange");
  text("100",260,550);
  fill("orange");
  text("100",340,550);
  fill("orange");
  text("100",420,550);
  fill("orange");
  text("100",500,550);
  fill("orange");
  text("200",580,550);
  fill("orange");
  text("200",660,550);
  fill("orange");
  text("200",740,550);


  stroke("yellow");
  line(0,480,800,480);
  Engine.update(engine);
 
  
  
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   } 
   
   if(particles!==null){
     
      particles.display();

      if(particles.body.position.y>780){

        if(particles.body.position.x<280){
          score=score+500;
          particles=null;
          if(count===5){
            gameState="end";
          }
        }
      }
    }
    if(particles!==null){
     
      particles.display();

      if(particles.body.position.y>780){
        if(particles.body.position.x>280 && particles.body.position.x<600){
          score=score+100;
          particles=null;
          if(count===5){
            gameState="end";
          } 
      }
    }
  }

   if(particles!==null){
     
      particles.display();

      if(particles.body.position.y>780){
      if(particles.body.position.x>600){
        score=score+200;
        particles=null;
        if(count===5){
          gameState="end";
        } 
    }
   }
  }

  if(gameState==="end"){
    textSize(80);
    stroke("Blue");
    strokeWeight(6);
    text("GAME OVER", 200,300);
  }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
    if(gameState!=="end"){
    count++;
    particles=new Particle(mouseX,10,10,10);
    }
}