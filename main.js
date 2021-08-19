function preload() {

  }
  
function setup() {
  canvas = createCanvas(640,480);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
  
function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw() {
image(video,0,0,640,480);
  }
  
function take_snapshot(){    
    save('myFilterImage.png');
  }