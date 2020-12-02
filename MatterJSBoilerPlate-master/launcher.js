class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA.body,
            pointB:pointB,
            length:1,
            stiffness:0.08,
            
        }
        
        
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
       

    }
    attach(){
        Matter.Body.setPosition(stone.body,{x:156,y:347})
        this.chain.bodyA=stone.body;
    }
    fly(){
        this.chain.bodyA=null;
    }
    display(){
        
        if(this.chain.bodyA){
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
        
          }
          
    }
}