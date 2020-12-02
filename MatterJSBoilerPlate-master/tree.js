class Tree {
    constructor(x,y){

        var options={
            restitution:0,
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,50,50,options);        
        this.image=loadImage("Plucking mangoes/tree.png");
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,300,600)
    }
   
}