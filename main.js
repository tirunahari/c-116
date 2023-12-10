noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('ears1-removebg-preview.png');
}

function setup() {
  canvas = createCanvas(350, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(350, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-50;
    noseY = results[0].pose.nose.y-240;
  }
}

function draw() {
  image(video, 0, 0, 350, 300);
  image(clown_nose, noseX, noseY, 110, 170);
}

function take_snapshot(){    
  save('myFilterImage.png');
}