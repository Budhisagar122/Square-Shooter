class Blue{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  display(){
    var blueBall=createSprite(this.x,this.y,40,40);
    blueBall.shapeColor="blue";
  }
} 