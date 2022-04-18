function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(0,0,30,30);
    video.hide();
  
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x= results[0].pose.nose.x-15;
        nose_y=results[0].pose.nose.y-15;          
        console.log("nose x=" + nose_x);
        console.log("nose y=" + nose_y);
    }
}
function modelLoaded(){
    console.log("poseNet is intialized")
}

function draw(){
image(video,0,0,30,30)
}

function take_snapshot(){
    save("MyFilterPicture.png");
}
