class Red{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  display(){
    
    var redBall=createSprite(this.x,this.y,40,40);
    redBall.shapeColor="red";
  }
} 