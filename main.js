var imageVar = "";

var noseX = 0;
var noseY = 0;

difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload()
{
    imageVar = loadImage('https://upload.wikimedia.org/wikipedia/commons/f/f8/Kyuubi_eye.svg');
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(50, 150)

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('black');
    image(imageVar, 110, 100, 300, 300);
    document.getElementById("square_side").innerHTML = "WIDTH AND HEIGHT OF A SQUARE WILL BE = " + difference + "px";
    fill('white');
    textSize(differenc);
    text('九喇嘛', 30, 100);
}

function modelLoaded()
{
    console.log('THEE MODEL HAS BEEN LÖDED');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}