class Stone {
    constructor(x,y){
        var options={
            restitution:0,
            friction:1,
            density:2.5,
            isStatic:false
           
            

        }
        
        this.body=Bodies.circle(x,y,20,options);
        this.image=loadImage("Plucking mangoes/stone.png")
        World.add(world,this.body)
       
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
  
   
}