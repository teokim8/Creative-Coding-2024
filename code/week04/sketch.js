let data;
let btn;
let resPromise;



/*function preload() {
  data = loadJSON('data.json');
}*/

async function setup() {
  createCanvas(400, 400);
  background(255);
  
  let res= await fetch('data.json');
   data = await res.json();
     
  };

/*delay(1000).then(() => console.log('fire'));*/




function draw() {
 background(220);
if (!data) return;

 for (let i = 0; i< data.shapes.length; i++){
   const shapeObj = data.shapes[i];
 fill(shapeObj.color);

 if (shapeObj.shape ==='circle'){
   circle(shapeObj.pos[0],shapeObj.pos[1],100);
 } else {
   rect(shapeObj.pos[0], shapeObj.pos[1],100,100);
 }

 }
 }

