class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.pathImage = loadImage("sprites/smoke.png")
    this.path=[]; //array...multiples values
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x>200 && this.body.velocity.x>5){
    var position = [this.body.position.x, this.body.position.y];
    this.path.push(position);//[[100,101], [101,102],[102,103],...]
    }
//i=0,1,2,3,4
    for(var i= 0; i<this.path.length; i=i+1){
      image(this.pathImage, this.path[i][0], this.path[i][1]);
    }
    super.display();
  }
}
