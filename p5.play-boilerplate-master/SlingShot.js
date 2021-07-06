class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness :0.4,
            lenght :20
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }
    attach(){
        this.sling.bodyA = ball;
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4)
            fill("'red");
            line(pointA.x,pointA.y, pointB.x,pointB.y);
        }
    }

}