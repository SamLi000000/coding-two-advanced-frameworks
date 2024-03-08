let mobilenet;
let Robin;

function modelReady(){
  console.log('Model is ready!!!');
  mobilenet.predict(Robin, gotResults);
}


function gotResults(error, results){
  if (error){
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].className;
    let prob = results[0].probability;
    fill(0);
    textSize(40);
    text(label, 10, height - 100);
    createP(label);
    createP(prob);
  }
}

function imageReady(){
  image(Robin, 0, 0);

}

function setup() {
  createCanvas(640, 480);
  Robin = createImg('Robin.png', imageReady);
  Robin.hide();
  background(0);

  
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
