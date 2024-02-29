class Vehicle {
    constructor (x, y) {
        this.loc = createVector(x,y);
        this.acc = createVector();
        this.vel = createVector();
        this.friction = 0.995;

    }

applyForce(force) {
    this.acc = force;
}


update() {

    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.friction);

if (this.loc.y > height) {
    this.loc.y = height;
    this.vel.y *= -1;

}


}





    display(){
        circle(this.loc.x, this.loc.y, 20);
    }
}