class Player {
    constructor(){
     this.name=null;
     this.distance=0;
     this.index=null; 
    }
    getCount (){
    var playerCountref=database.ref("playerCount");
    playerCountref.on("value",(data)=>{
      playerCount=data.val();  
    })    
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }

    update(){
    var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
    })
    }

    static getPlayerinfo(){
      var  playerinforef=dataBase.ref("players");
      playerinforef.on("value",(data)=>{
       allPlayers=data.val();
      })
    }
}