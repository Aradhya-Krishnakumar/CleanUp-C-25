class paper
{
    constructor(x,y,r,angle)
    {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, r, options);
        this.body.visible = false;
        this.x=x;
        this.y=y;
        this.r=r;
        this.angle = angle;
        World.add(world, this.body)
    }
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0,70,70);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}
