noseX = 0;
noseY = 0;
rightwrist = 0;
leftwrist = 0;

function setup() {

    video = createCapture(VIDEO);
    video.size(550, 500)
    create = createCanvas(550 , 200);
    Canvas.position(550, 200);
}

function modelLoaded() {

    console.log('modelloaded');
}