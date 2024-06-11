function preload(){

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw() {
    image(video, 160, 120, 320, 240);
    fill(0,255,0);
    rect(45, 45, 560, 30);
    rect(575, 45, 30, 400);
    rect(45, 405, 560, 30);
    rect(45, 45, 30, 400);

    fill(255,0,0);
    stroke(0,0,0);
    circle(60, 60, 60);
    circle(590, 420, 60);
    circle(590, 60, 60);
    circle(60, 420, 60);
}

function take_snapshot() {
save('student_name.png');
}

