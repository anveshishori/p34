class Bob{
constructor(x,y,color){
    var option = {
    restitution : 1,
    friction:0,
    frictionAir:0.0,
    slop : 1,
    inertia: Infinity


}
this.body = Bodies.circle(x,y,60, option)
this.radius = 60;
this.color = color

World.add(myworld, this.body);

}

display(){
var pos = this.body.position
var angle = this.body.angle
push();
translate(pos.x,pos.y);
rotate(angle)
ellipseMode(RADIUS);
fill(this.color)
ellipse(0,0,this.radius, this.radius)
pop();
}



}