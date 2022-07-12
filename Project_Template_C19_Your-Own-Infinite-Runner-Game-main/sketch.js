var PLAY=1;
var END=0;
var gameState=PLAY;

var scaredgirl,scaredgirlImg 
var badguy,badguyImg 
var spikes,spikesGroup,spikesImg;
var wood,woodImg

var invisibleGround 

var score;
 
function preload(){
    scaredgirlImg= loadImage("../assets/scaredgirl.png");
    badguyImg=loadImage("../assets/badguy.png");
    spikesImg=loadImage("../assets/spikes.png");
    woodImg=loadImage("../assets/darkforest.jpg")
    
}

function setup() { 
    createCanvas(windowWidth,windowHeight);

    wood=createSprite(width/2,200);
    wood.addImage(woodImg);
    wood.velocityX=4;

    scaredgirl=createSprite(50,180,20,50);
    scaredgirl.addAnimation("running",scaredgirlImg);
    scaredgirl.scale=0.5;

    badguy=createSprite(40,170,10,40);
    badguy.addAnimation("running",badguyImg);
    badguy.scale=0.5;


    invisibleGround=createSprite(200,190,400,10);
    invisibleGround.visible=false;

    console.log("Hello"+5);


    score=0;

}

function draw() {
    background(180);
    text("Score"+ score,500,50);
 
}