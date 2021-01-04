class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        // strokeWeight(1.5);

        // rectMode(CENTER);
        // rect(this.boxObject.position.x, this.boxObject.position.y, this.width, this.height);
        pop();
      }
}