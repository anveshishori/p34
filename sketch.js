
var ground, boxleft, boxright
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse
const MouseConstraint = Matter.MouseConstraint
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var r=20;
function setup() {
	createCanvas(windowWidth/1.15, windowHeight/1.15);
		
	
	myengine = Engine.create();
	myworld = myengine.world;
	
	let canvasmouse= Mouse.create(canvas.elt)
	canvasmouse.pixelRatio = pixelDensity()

	let options = {

mouse: canvasmouse

	}

	mConstraint = MouseConstraint.create(options)
	World.add(myworld, mConstraint)


	bob1 = new Bob(300,250,"red");
	bob2 = new Bob(420,250,"yellow");
	bob3 = new Bob(540,250,"green");
	bob4 = new Bob(660,250,"blue");
	bob5 = new Bob(780,250,"pink");
	
	rope1 = new Chain(bob1.body,{x:300, y:50})
	rope2 = new Chain(bob2.body,{x:420, y:50})
	rope3 = new Chain(bob3.body,{x:540, y:50})
	rope4 = new Chain(bob4.body,{x:660, y:50})
	rope5 = new Chain(bob5.body,{x:780, y:50})
	
	Engine.run(myengine);

}


function draw() {

  background("lightblue");
  //Engine.update(myengine);
    
//	keyPressed();
  
	//roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
   //dustbin.display();
   rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()

   fill("red")
   textSize(25);
   text("Move the ball with the mouse",300,650)
}

function mouseDragged() {

	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
   
  	
	}






