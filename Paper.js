class Paper {
    constructor(){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Bodies.circle(85, 575, 80, options);
        this.x = 85;
        this.y = 85;
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("pink");
        ellipse(85, 85, 40);
        pop();
    }
};