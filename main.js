song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftWrist=0;

function preload(){

song=loadSound("Dollar.mp3");


}

function setup(){

canvas = createCanvas(500,500);
canvas.center();

video = createCapture(VIDEO);

    video.hide();

poseNet= ml5.poseNet(video,modelLoaded);

poseNet.on('pose',gotPoses);


}

function draw(){

image(video,0,0,500,500);
 fill("red");
stroke("black");
if(scoreleftWrist>0.2){


circle(leftwristX,leftwristY,20);
numberleftwristY=Number(leftwristY);
removedecimal= floor(numberleftwristY);
volume=removedecimal/500;
document.getElementById("volume").innerHTML="volume is "+volume;
song.setVolume(volume);



}
}

function play(){

song.play();
song=setVolume(1);
rate= song.rate(1);

}


function modelLoaded(){

console.log("model is loaded");

}

function gotPoses(results){

if(results.length > 0){

console.log(results);

scoreleftWrist=results[0].pose.keypoints[9].score;
console.log("score leftWrist is"+scoreleftWrist);


leftwristX = results[0].pose.leftWrist.x;
lefttwristy= results[0].pose.leftWrist.y;
console.log("leftwristX ="+ leftwristX+"leftwristY ="+leftwrisY);

rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0],pose.rightWrist.y;
console.log("rightwristX ="+rightwristX+"rightwristY ="+rightwristY );

};


}
