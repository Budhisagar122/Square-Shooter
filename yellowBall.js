class Yellow{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  display(){
    
    var yellowBall=createSprite(this.x,this.y,40,40);
    yellowBall.shapeColor="yellow";
  }
} 