let state = 0;

let player, food, bg;
let title, text;
let bgm;
function preload(){
	player = loadImage('img/player.png');
	food = loadImage('img/food.png');
	bg = loadImage('img/background.png');

    title = loadFont('title.ttf');
  	text = loadFont('text.ttf');

  	bgm = loadSound("bgm.mp3");
}

function setup(){
	let cnv = createCanvas(800,600);
	background(0);
	cnv.parent('#container');
	cnv.style('display','block');
	cnv.style('margin','auto');
	cnv.style('border','3px solid black');
}

function draw(){
	if (state == 0){
		pregame();
	}
	else if (state == 1){
		play();
	}
	else if (state == 2){
		tutorial();
	}
	else if (state == 3){
		over();
	}
}

function pregame(){
	clear();
	background(0);
	imageMode(CORNER);
	textAlign(CENTER);
	image(bg,0,0,800,600);

	fill(255);
	textSize(15);
	textFont(text);
	text("create account",width/2,height/3*2);

	fill(0, 255, 255);
  	noStroke();
  	textSize(50);
  	textStyle(BOLD);
  	textFont(title);
  	text("START", width/2,height/3);
  
	if(mouseX > width/2-50 && mouseX < width/2+50 && mouseY > height/3-50 && mouseY < height/3 +50){
	    stroke(0);
	    strokeWeight(5);
	    text("START", width/2,height/3);

	    begin = true;
	}else{
	    begin = false;
	}
}

function tutorial(){
  clear();
  background(220);
  imageMode(CORNER);
  image(bg,0,0,640,360);

  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(30);
  textStyle(BOLD);
  textFont(title);
  textAlign(CENTER);
  text("TUTORIAL", width/2,height/4);

  textSize(8);
  fill(255);
  noStroke();
  textFont(text);
  text("W A S D: MOVE", width/5,height/2);
  text("C: CHOP FOOD", width/5,height/2+25);
  text("BLANK SPACE: SERVE", width/5,height/2+50);

  //points introduction to different types of dish
  // image(point,width/5*2.5+35,height/2-20,15,15);
  // image(point,width/5*2.5+35,height/2,15,15);
  // image(point,width/5*2.5+35,height/2+20,15,15);
  // image(point,width/5*2.5+35,height/2+40,15,15);
  // image(point,width/5*2.5+35,height/2+60,15,15);
}

function play(){
	background(0);
	imageMode(CORNER);
	image(bg,0,0,800,600);

	player.display();
	player.move();
	player.cook();

	food.cook();
	food.serve();
}

class player{
 	construct(){
 		xPos = 400;
 		yPos = 300;
 		pic = player;
 		points = 0;
 	}

 	display(){
 		imageMode(CENTER);
 		image(this.pic, xPos, yPos);
 	}

 	move(){
 		if(keyIsDown(65)){
 			xPos -=3;
 		}
 		if(keyIsDown(68)){
 			xPos +=3;
 		}
 		if(keyIsDown(87)){
 			yPos +=3;
 		}
 		if(keyIsDown(83)){
 			yPos -=3;
 		}

 		xPos = constrain(xPos, 100,700);
 		yPos = constrain(yPos, 100,500);
 	}

 	cook(fd){
 		if(keyIsDown(67)){
 			
 		}
 	}

 	serve(fd){
 		if(keyIsDown(32)){
 			points += fd.points;
 		}
 	}
}

class food{
	construct(x,y, pt){
		xPos = x;
		yPos = y;
		points = pt;
	}

	serve(){
		if(keyIsDown(32)){
			player.serve(this);
		}
	}
}


function over(){
  clear();
  textAlign(CENTER);
  background(220);

  imageMode(CORNER);
  image(bg,0,0,800,600);

  fill(255);
  stroke(0);
  textSize(50);
  textStyle(BOLD);
  textFont(title);
  text("Congratulations!", width/2, height/2);

  textSize(15);
  noStroke();
  textFont(text);
  text("Start Over", width/2, height/3*2);
  if(mouseX > width/2-50 && mouseX < width/2+50 && mouseY > height/3*2-10 && mouseY <height/3*2+10){
    stroke(0);
    strokeWeight(3);
    text("Start Over", width/2, height/3*2);
    again = true;
  }else{
    again = false;
  }
}

function mouseClicked(){
	if (begin == true){
		state = 1;
	}
	if (again == true){
		state = 0;
	}
}

