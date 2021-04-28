//var greenBall1,blueBall1,orangeBall1,redBall1,yellowBall1;
var blueGroup,greenGroup,yellowGroup,orangeGroup,redGroup;
var shooter;
var colour;
var score=0;
var lives=0;
var gameState="play";
var shotBlock;
var shot=[];

function preload(){
  
}

function setup(){
  	createCanvas(500,600);
  	/*blueBall1=new Blue(50,20);
  	greenBall1=new Green(90,20);
  	redBall1=new Red(130,20);
  	orangeBall1=new Orange(170,20);
  	yellowBall1=new Yellow(210,20);*/
  
  	blueGroup=createGroup();
  	greenGroup=createGroup();
  	redGroup=createGroup();
  	yellowGroup=createGroup();
  	orangeGroup=createGroup();
  
  	shooter=createSprite(250,450,50,50);
	
	if(gameState==="play"){
		spawnGoal();
		spawnSquares();
	}
  

}

function draw(){
  	background("white");
  	/*blueBall1.display();
  	greenBall1.display();
  	redBall1.display();
  	orangeBall1.display();
  	yellowBall1.display();*/

	fill("black")
	textSize(20);
	text("Score :"+score,50,550);

	if(keyWentDown("space")&&lives<10){
		spawnGoal();
		lives=lives+1;
		console.log(lives);
  	}

	if(lives===10){
		gameState="end";
	}

	if(keyDown("r")&&gameState==="end"){
		shooter=createSprite(250,450,50,50);
		spawnGoal();
		spawnSquares();
		score=0;
		lives=0;
		gameState="play";
	}

	if(gameState==="play"){

  		if(shooter.isTouching(redGroup)||
    		shooter.isTouching(greenGroup) ||
    		shooter.isTouching(orangeGroup) ||
    		shooter.isTouching(yellowGroup) ||
    		shooter.isTouching(blueGroup) ){
				shooter.velocityX=0;
				shooter.velocityY=0;
			

    			if(shooter.isTouching(redGroup)&&colour==="red"){
      				shootRed();
				  	console.log("red");
    			}
				else if(shooter.isTouching(blueGroup)&&colour==="blue"){
					shootBlue();
					console.log("blue");
				}
				else if(shooter.isTouching(greenGroup)&&colour==="green"){
					shootGreen();
					console.log("green");
				}
				else if(shooter.isTouching(yellowGroup)&&colour==="yellow"){
					shootYellow();
					console.log("yellow");
				}
				else if(shooter.isTouching(orangeGroup)&&colour==="orange"){
					shootOrange();
					console.log("orange");
				}
				shooter.x=250;
				shooter.y=450;

  		}
	}

	if(gameState==="end"){
		redGroup.destroyEach();
		greenGroup.destroyEach();
		orangeGroup.destroyEach();
		blueGroup.destroyEach();
		yellowGroup.destroyEach();
		shooter.destroy();
		
		textSize(40);
		text("Game Over",150,300);
		text("Press R to Restart",100,350);
	}
  
	text("Lives :"+lives,150,550);
	drawSprites();

  
}

function spawnSquares(){
  	for(var x=20;x<500;x=x+55){
		for(var y=20;y<250;y=y+55){
			var rand=Math.round(random(1,5)) 
			switch(rand){
				case 1:var blue=createSprite(x,y,50,50);
					blueGroup.add(blue);
					blue.shapeColor="blue"
					break;

				case 2:var orange=createSprite(x,y,50,50);
					orangeGroup.add(orange);
					orange.shapeColor="orange"
					break;

				case 3:var yellow=createSprite(x,y,50,50);
					yellowGroup.add(yellow);
					yellow.shapeColor="yellow"
					break;

				case 4:var red=createSprite(x,y,50,50);
					redGroup.add(red);
					red.shapeColor="red"
					break;

				case 5:var green=createSprite(x,y,50,50);
					greenGroup.add(green);
					green.shapeColor="green"
					break;

			}
		}
	}
}

function spawnGoal(){
	
  	var rand2=Math.round(random(1,5));
  	switch(rand2){
		case 1:
			shooter.shapeColor="blue"
			colour="blue";
			
			shooter.velocityX=Math.round(random(-6,-8));
			shooter.velocityY=Math.round(random(-7,-5));
			break;

		case 2:
			shooter.shapeColor="orange"
			colour="orange";
			
			shooter.velocityX=Math.round(random(-5,-4));
			shooter.velocityY=Math.round(random(-6,-4));
			break;

		case 3:
			shooter.shapeColor="yellow"
			colour="yellow";
			
			shooter.velocityX=Math.round(random(-6,-4));
			shooter.velocityY=Math.round(random(-8,-4));
			break;

		case 4:
			shooter.shapeColor="red"
			colour="red";
			
			shooter.velocityX=Math.round(random(4,6));
			shooter.velocityY=Math.round(random(-7,-5));
			break;

		case 5:
			shooter.shapeColor="green"
			colour="green";
			
			shooter.velocityX=Math.round(random(4,8));
			shooter.velocityY=Math.round(random(-8,-4));
			break;

	}
}

function shootRed(){
	for(var i=0;i<redGroup.length;i++){
		if(redGroup.get(i).isTouching(shooter)){
			shotBlock=redGroup.get(i);
			shotBlock.destroy();
			score=score+5;
			
		}	

	}		
			
			
	
		

	
}

function shootGreen(){
	for(var i=0;i<greenGroup.length;i++){
		if(greenGroup.get(i).isTouching(shooter)){
			greenGroup.get(i).destroy();
			score=score+5;
		}
	}
}

function shootBlue(){
	for(var i=0;i<blueGroup.length;i++){
		if(blueGroup.get(i).isTouching(shooter)){
			blueGroup.get(i).destroy();
			score=score+5;	
		}
	}
}

function shootYellow(){
	for(var i=0;i<yellowGroup.length;i++){
		if(yellowGroup.get(i).isTouching(shooter)){
			yellowGroup.get(i).destroy();
			score=score+5;
		}
	}
}

function shootOrange(){
	for(var i=0;i<orangeGroup.length;i++){
		if(orangeGroup.get(i).isTouching(shooter)){
			orangeGroup.get(i).destroy();
			score=score+1;
		}
	}
}