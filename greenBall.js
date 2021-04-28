class Green{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  display(){
    
    var greenBall=createSprite(this.x,this.y,40,40);
    greenBall.shapeColor="green";
  }
} 