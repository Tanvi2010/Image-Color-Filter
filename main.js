function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 650, 450);
    tint(tintcolor);
}

function take_snapshot() {
    save("MyImage.png");
}
tintcolor = "";

function filtertint() {
    tintcolor = document.getElementById("colorname").value;
}
