let data;
let maxLat, maxLon, minLat, minLon ;
function preload(){
  data = loadJSON('../data/2023-11-06.json');
  
}

function setup(){
createCanvas (600,600);
console.log('station:', data.stations.length);
const lats = data.stations.map( station => station.lat);

maxlat = Math.max(...lats);
console.log(maxLat);


}

function draw(){
  background(200);

}