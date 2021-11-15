var form;
var backgroundImg, boyImg, girlImg, platformImg;

var database;

var playerGender, myPlayButton = 0;

var score = 0;

var ground;

var platformGroup;

function preload()
{
  backgroundImg = loadImage("assets/Background.jpg");

  boyImg = loadImage("assets/Jason.png");
  girlImg = loadImage("assets/Trixy.png");

  platformImg = loadImage("assets/Platform.png");
}

function setup()
{
  createCanvas(windowWidth-15, windowHeight-30);

  form = new Form();

  database = firebase.database();
  console.log(database);

  ground = createSprite(width/2, height-85, width, 10);
  ground.visible = false;

  platformGroup = new Group;
}

function draw()
{
  background(backgroundImg);

  textSize(25);
  text("Score: " + score, width-130, height/2-330);

  form.display();

  if(frameCount%200 === 0)
  {
    database.ref("playButton").on("value", function(data){
      myPlayButton = 1;

      //console.log(myPlayButton);

      if(myPlayButton == 1)
      {
        console.log("Play Button is pressed.");
        form.spawnPlatform();
      }

      else
      {
        console.log("Play Button is not pressed.");
      }
    })
  }

  drawSprites();
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}