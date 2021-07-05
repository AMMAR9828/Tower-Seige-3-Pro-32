class Block{
    constructor(x,y){
        var options={
            'restitution':0.4,
            'friction':1.0
        }
        this.body=Bodies.rectangle(x,y,30,40,options)
        this.width=30
        this.height=40
        World.add(world,this.body)
        this.visiblity = 255;
    }
    score(){
        if(this.visiblity<0 && this.visiblity>-1005){
            score++
        }
    }
    display(){
        if((this.body.speed)<6){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,30,40)
        pop();
        } 
        else{
            World.remove(world,this.body);
            push();
            this.visiblity = this.visiblity-5;
            tint(255,this.visiblity);
            rect(999,999,this.width,this.height);
            pop();
        }
        
        
    }
}