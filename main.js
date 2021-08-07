song = "";
scorerightwrist = 0;
scoreleftwrist = 0;
rightwristX = 0;
rightwristY = 0;
leftwristX = 0;
leftwristY = 0;
function preload(){
    song = loadSound("Astronaut-in-The-Ocean-song.mp3");
}
function play(){
    song.play();
}
function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelLoded);
posenet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,500,500);
}
function stop(){
    song.stop();
}
function modelLoded(){
    console.log("posenet is started");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        scorerightwrist = result[0].pose.keypoints[10].score;
        scoreleftwrist = result[0].pose.keypoints[9].score;
console.log("scorerightwrist = " + scorerightwrist + "scoreleftwrist = " + scoreleftwrist);


rightwristX = result[0].pose.rightWrist.x;
rightwristY = result[0].pose.rightWrist.y;
console.log("rightwristX = " + rightwristX + "rightwristY = " + rightwristY);

leftwristX = result[0].pose.leftWrist.x;
leftwristY = result[0].pose.leftWrist.y;
console.log("leftwristX = " + leftwristX + "lefttwristY = " + leftwristY);
    }

}