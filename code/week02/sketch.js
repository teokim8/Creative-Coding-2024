let bnt;
let numOfCircle = 0;


function setup() {
    createCanvas(400, 400);
    btn = createButton("click me");
    btn.addClass('my-button');
    btn.mousePressed(btnPressed);



  }
  
  function btnPressed () {
    numOfCircle++;
  }


  function draw() {
    background(220);
    for (let i = 0; i < numOfCircle; i++){
        numOfCircle(random(width),random(height), random(5,15));

    }
  }



