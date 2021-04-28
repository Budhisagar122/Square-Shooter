class Orange{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  display(){
    
    var orangeBall=createSprite(this.x,this.y,40,40);
    orangeBall.shapeColor="orange";
  }
} 