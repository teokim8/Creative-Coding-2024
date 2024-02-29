let myVehicle;

function setup() {
  createCanvas (600,600);

  myVehicle = new Vehicle(width/2, 30);
}

function draw(){
  background (200);

  const gravity = createVector (0, 0.02);

  myVehicle.applyForce(gravity);

  myVehicle.update();
  myVehicle.display();
}