class Chain{
constructor(bodyA, pointB){
    
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness:1,
        angularstiffness:1,
        length: 320

    }
    this.pointB = pointB
    this.pointX = bodyA.x
    this.pointY = bodyA.y-250
   this.rope = Constraint.create(options);
    
    World.add(myworld, this.rope);
    
}

display(){

  
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB
push()
strokeWeight(3.5);
stroke("black")
    
line(pointB.x, pointB.y, pointA.x, pointA.y-60);
pop()
    }

}