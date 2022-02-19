class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();

    car1=createSprite(width/2-100,height-100);
    car1.addImage("car1",car1_img);
    car1.scale=0.07

    car2=createSprite(width/2+100,height-100);
    car2.addImage("car2",car2_img);
    car2.scale=0.07

    cars=[car1,car2]
  } 
  getState(){
    var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",function(data){
      gameState=data.val();
      
    })

  }
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
  
  handleElements(){
    form.hide();
    form.titleimg.position(40,50);
    form.titleimg.class("gameTitleAfterEffect");
  }
  play(){
    this.handleElements();
    Player.getPlayersInfo();
    Image(track,0,-height*5,width*5,height*6);
    drawSprites();
  }
}

