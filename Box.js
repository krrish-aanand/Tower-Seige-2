class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':0.001
    }  

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    
    World.add(world, this.body);
  }

  display(){
    push();
    if(this.body.speed<3){
    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    fill(255,255,255);
    rect(0, 0, this.width, this.height);
    pop();
  }

  }
}