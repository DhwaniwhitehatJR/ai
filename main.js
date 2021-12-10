img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;
function preload() {
	img=loadImage("mario05.png")
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_mariodie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	createCanvas(650,400);
	video=createCapture(VIDEO);
	video.size(600,400);
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("modelLoaded");

}
function gotPoses(results) {
	if(results.length>0){
	       console.log(results);
		   noseX=results[0].pose.nose.x;
		   noseY=results[0].pose.nose.y;
		   console.log("noseX="+noseX+"noseY="+noseY);
	}
	
}
function draw() {
	background("#D3D3D3");
    img(img,marioX,marioY,40,70);
	game();

}
