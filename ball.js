class Ball{
    constructor(x,y,radius,xForce,yForce){
        var options={
            restitution:1,
            friction:1,
            density:1.5
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.diameter=radius*2;
        this.image=loadImage("ball.png");
        this.xForce=xForce;
        this.yForce=yForce;
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.diameter,this.diameter);
        pop();
        if(keyWentDown("up")){
            Body.applyForce(this.body,this.body.position, {x:this.xForce,y:this.yForce});
          }
    }
}