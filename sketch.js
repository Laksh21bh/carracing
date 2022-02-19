var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState,playerCount;
var car1;
var car2;
var track;
var car1_img;
var car2_img;
var cars=[]
var allPlayers;
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState()
}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
    game.update(1)
  }
  if(gameState==1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
