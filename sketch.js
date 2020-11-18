var database,playerCount=0,gameState=0;
var allPlayers;
var distance=0;
var form,player,game;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img;
var groundimg,trackimg;

function preload(){
car1img=loadImage("Images/car1.png");
car2img=loadImage("Images/car2.png");
car3img=loadImage("Images/car3.png");
car4img=loadImage("Images/car4.png");
trackimg=loadImage("Images/track.png");

}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database=firebase.database();
    game=new Game();
    game.start();
    
} 

function draw(){
   if (playerCount===4) {
       game.update(1);
    
   }

   if (gameState===1){
       game.play();
   }
    
}



