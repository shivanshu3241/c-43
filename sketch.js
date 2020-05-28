var person, person_Image;
var ground, invisibleGround, groundImage;
var cloudsgroup, cloudimage;
var textgroup, text1, text2, text3, text4, text5;
var score = 0;

function preload()
{
  person_Image = loadImage("Images/person1.PNG");
  
  groundImage = loadImage("Images/ground2.png");

  cloudimage = loadImage("Images/cloud.png");
  
  text1 = loadImage("Images/pos1.PNG"); 
  text2 = loadImage("Images/pos2.PNG"); 
  text3 = loadImage("Images/pos3.PNG");
  text4 = loadImage("Images/neg1.PNG");
  text5 = loadImage("Images/neg2.PNG");
}

function setup() {
  createCanvas(600, 200);
  
  person = createSprite(50, 180, 20, 50);
  person.addImage("person_Image", person);
  person.scale = 0.5;
  
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;
  
  textgroup = new Group();
  cloudsgroup = new Group();
  
}

function draw() 
{
  background(180);
  
  if(keyDown("space")) 
  {
    person.velocityY = -10;
  }
  score = score + Math.round(getFrameRate() / 60);

  text("score:" + score, 500, 50);
  person.velocityY = person.velocityY + 0.8
  
  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }
  person.collide(invisibleGround);

  spawnClouds();
  spawnText();
  drawSprites();
}
  
function spawnClouds() 
{
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) 
    {
    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120));
    cloud.addImage(cloudimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = person.depth;
    person.depth = person.depth + 1;
    
   cloudsgroup.add(cloud); 
    
  }
} 
    
function spawnText() 
{
     if(frameCount % 60 === 0) 
     {
       var text = createSprite(600, 165, 10, 40);
       text.velocityX = -6;
       var rand = Math.round(random(1, 6));
       switch(rand)
       {
       case 1:text.addImage(text1);
              break;
       case 2:text.addImage(text2);
              break;
       case 3:text.addImage(text3);
              break;
       case 4:text.addImage(text4);
              break;
       case 5:text.addImage(text5);
              break;
       case 6:text.addImage(text2);
              break;
       default:break;    
      } 

      text.scale = 0.5;
      text.lifetime = 100;
      textgroup.add(text);
    }
}