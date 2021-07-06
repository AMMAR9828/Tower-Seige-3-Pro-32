class Ground{
    constructor(){
        var options={
            isStatic: true
        }
        this.ground=Bodies.rectangle(450,390,900,20,options)
        World.add(world,this.ground)
    }
    display(){
        push();
        strokeWeight(3)
        fill(42,49,255);
        stroke("orange")
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
        pop();
    }
}