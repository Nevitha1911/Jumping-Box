var canvas;
var music;
var surface1,surface2,surface3,surface4;
var edges, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,550);

    //create 4 different surfaces
     surface1 = createSprite(80,530,130,20);
    surface1.shapeColor = "blue"
     surface2 = createSprite(230,530,130,20);
    surface2.shapeColor = "orange"
     surface3 = createSprite(380,530,130,20);
    surface3.shapeColor = "pink";
     surface4 = createSprite(530,530,130,20);
    surface4.shapeColor = "green"

    //create box sprite and give velocity
    box = createSprite(random(20,550),100,30,30);
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 2;

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites()
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.play()
   }
    if(surface2.isTouching(box)){
       box.shapeColor = "orange";
       box.velocityX = 0;
       box.velocityY = 0;
       music.stop()
   }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
       box.shapeColor = "pink";
   }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
       box.shapeColor = "green";
   }



   
    drawSprites();
}
