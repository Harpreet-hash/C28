class Mango{
    constructor(x,y,){
        
        var options={
            isStatic:true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.image=loadImage("Plucking mangoes/mango.png")
        World.add(world,this.body)

    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
   
}