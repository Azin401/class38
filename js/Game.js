class Game {
    constructor(){
        
    }
    
    getState (){
        var gameStateRef=database.ref ("gameState");
        gameStateRef.on("value",function (data){
            gameState=data.val();

        })
    }

    update (state){
     database.ref ("/").update({
         gameState:state
     })
    }

    async start (){
        if (gameState===0){
            
            player= new Player();
            var playerCountref=await database.ref("playerCount");
            playerCountref.once("value");
            if (playerCountref.exists){
            playerCount=playerCountref.val();
            player.getCount();

            }
            form= new Form();
            form.display();
            
            car1=createSprite(100,200);
            car1.addImage(car1img);
            car2=createSprite(300,200);
            car2.addImage(car2img);
            car3=createSprite(500,200);
            car3.addImage(car3img);
            car4=createSprite(700,200);
            car4.addImage(car4img);
            cars=[car1,car2,car3,car4];

        }
        
    }

    play(){
        form.hide();
        Player.getPlayerinfo();

        if (allPlayers!==undefined){
        var index=0;
        var x=0;
        var y;
        
        for(var plr in allPlayers){
         index=index+1;
         x=x+200;
         y=displayHeight-allPlayers[plr].distance;
         cars[index-1].x=x;
         cars[index-1].y=y;


        }
        }
        drawSprites();
    }

    

}